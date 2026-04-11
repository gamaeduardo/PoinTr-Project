import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiGrid, FiMoreVertical } from 'react-icons/fi';
import io from 'socket.io-client';
import RecentEntry from './RecentEntry';
import ToolItem from './ToolItem';

const SERVER_URL = '#';
const socket = io(SERVER_URL, { transports: ['websocket', 'polling'] });

const SupportMenu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [recentEntry, setRecentEntries] = useState([]);

    const menuWidthClass = 'w-96';
    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        socket.on('dashboard_update', (data) => {
            console.log('Ação recebida no Menu de Apoio:', data.type);

            setRecentEntries(prevEntries => {
                const newEntry = {
                    name: data.employeeName,
                    role: data.type.replace(/_/g, ' '),
                    time: data.time,
                    key: Date.now()
                };

                return [newEntry, ...prevEntries].slice(0, 5);
            });
        });

        return () => {
            socket.off('dashboard_update');
        };
    }, []);

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={toggleMenu}></div>
            )}

            <aside className={`fixed top-0 right-0 h-full bg-card-primary shadow-2xl z-50 ${menuWidthClass} transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-6 text-white">
        
                <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-3">
                    <h2 className="text-xl font-bold">Menu de Apoio</h2>
                    <FiMoreVertical size={24} className="text-gray-400 cursor-pointer hover:text-white" />
                </div>

                <h3 className="text-md font-semibold mb-3">Ferramentas</h3>
                <div className="grid grid-cols-4 gap-3 mb-6 border-b border-slate-700 pb-6">
                    <ToolItem icon={<FiGrid size={24} />} label="Filtros" />
                    <ToolItem icon={<FiGrid size={24} />} label="Relatório" />
                    <ToolItem icon={<FiGrid size={24} />} label="Exportar" />
                    <ToolItem icon={<FiGrid size={24} />} label="Ajustes" />
                    <ToolItem icon={<FiGrid size={24} />} label="Chamados" />
                    <ToolItem icon={<FiGrid size={24} />} label="Avisos" />
                    <ToolItem icon={<FiGrid size={24} />} label="Mensagens" />
                    <ToolItem icon={<FiGrid size={24} />} label="Ajuda" />
                </div>

                <div className="flex justify-between items-center mb-3">
                    <h3 className="text-md font-semibold">Pontos Recentes</h3>
                    <FiMoreVertical size={24} className="text-gray-400 cursor-pointer hover:text-white" />
                </div>

                <div className="
                    space-y-4 overflow-y-auto max-h-[40vh] pr-4

                    scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800

                    [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-slate-800 [&::-webkit-scrollbar-thumb]:bg-slate-600
                "> 
                    {recentEntry.length > 0 ? (
                        recentEntry.map((entry) => (
                            <RecentEntry
                                key={entry.key}
                                name={entry.name}
                                role={entry.role}
                                time={entry.time}
                            />
                        ))
                    ) : (
                        <p className='text-gray-400 text-center mt-6'>Aguardando a primeira ação...</p>
                    )}
                </div>

            </div>
            </aside>

            <button
                onClick={toggleMenu} 
                className={`fixed top-1/2 -translate-y-1/2 z-50 p-3 bg-[#0241b6] hover:bg-[#012c7c] text-white rounded-full cursor-pointer shadow-lg transition-all duration-300
                ${isOpen ? `right-${menuWidthClass.slice(2)}` : 'right-0'}
                ${isOpen ? 'rounded-l-full mr-1' : 'rounded-r-none'}
                ${isOpen ? 'rounded-r-full' : 'rounded-l-full'}
            `}>
                {isOpen ? <FiChevronRight size={24} /> : <FiChevronLeft size={24} />}
            </button>
        </>
    )
};

export default SupportMenu;