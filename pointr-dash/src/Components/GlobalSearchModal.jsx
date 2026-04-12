import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiUsers, FiUser, FiFileText, FiSettings, FiCalendar, FiLogOut, FiPlus, FiCommand } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';

const POINTR_DATA = {
    pages: [
        { id: 1, title: "Painel Geral", path: "", tag: "Dashboard", icon: FiFileText },
        { id: 2, title: "Calendário de Eventos", path: "events", tag: "Eventos", icon: FiCalendar },
        { id: 3, title: "Listagem de Colaboradores", path: "employees", tag: "Tabela RH", icon: FiUsers },
    ],
    actions: [
        { id: 4, title: "Adicionar Novo Evento", action: "ADD_EVENT", tag: "Calendário", icon: FiPlus },
        { id: 5, title: "Ver Relatório Principal", action: "VIEW_REPORT", tag: "Relatórios", icon: FiFileText },
        { id: 6, title: "Configurações Globais", action: "SETTINGS", tag: "Ajustes", icon: FiSettings },
        { id: 7, title: "Sair do Sistema", action: "LOGOUT", tag: "Segurança", icon: FiLogOut },
    ],
    employees: [
        { id: 8, title: "Lucas Tania", detail: "Design Lead", tags: ["TI", "Frontend"], icon: FiUser },
        { id: 9, title: "Matteo Vistocco", detail: "Head of Design", tags: ["Gerência", "UX"], icon: FiUser },
        { id: 10, title: "Aaron Kim", detail: "Front-end Engineer", tags: ["TI"], icon: FiUser },
    ]
};

const GlobalSearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [activeTab, setActiveTab] = useState('All');
    const navigate = useNavigate();
    const { companyName } = useParams();

    // Atalho de teclado ESC para fechar
    useEffect(() => {
        const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const handleNavigate = (path, action) => {
        if (path !== undefined) {
            navigate(`/${path}`);
        } else if (action === 'ADD_EVENT') {
            console.log("Abrir Modal de Novo Evento");
        }
        setQuery('');
        onClose();
    };

    const tabs = ['All', 'Pages', 'Employees', 'Actions'];

    const filteredResults = [
        ...POINTR_DATA.pages.map(p => ({ ...p, type: 'Pages' })),
        ...POINTR_DATA.actions.map(a => ({ ...a, type: 'Actions' })),
        ...POINTR_DATA.employees.map(e => ({ ...e, type: 'Employees' }))
    ].filter(item => {
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
        const matchesTab = activeTab === 'All' || item.type === activeTab;
        return matchesQuery && matchesTab;
    });

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className='fixed inset-0 bg-black/60 backdrop-blur-md z-150' 
                    />

                    <motion.div 
                        initial={{ opacity: 0, y: -40, x: '-50%', scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, x: '-50%', scale: 1 }}
                        exit={{ opacity: 0, y: -20, x: '-50%', scale: 0.95 }}
                        className="fixed top-[10%] left-1/2 w-full max-w-2xl z-160 bg-card-primary border border-main-border rounded-4xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] overflow-hidden"
                    >

                        <div className="p-6 border-b border-main-border bg-white/2">
                            <div className="flex items-center space-x-4">
                                <FiSearch size={22} className="text-accent" />
                                <input 
                                    autoFocus
                                    type="text" 
                                    placeholder="O que você está procurando?"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full bg-transparent text-primary-text focus:outline-none placeholder-secondary-text text-xl font-medium"
                                />
                                <div className='flex items-center gap-2 px-2 py-1 bg-main-bg border border-main-border rounded-lg text-secondary-text text-[10px] font-bold'>
                                    <FiCommand /> ESC
                                </div>
                            </div>


                            <div className="flex space-x-2 mt-6">
                                {tabs.map(tab => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-1.5 text-xs rounded-xl transition-all font-bold uppercase tracking-widest cursor-pointer
                                            ${activeTab === tab
                                                ? 'bg-accent text-white shadow-lg shadow-accent/20'
                                                : 'bg-main-bg text-secondary-text hover:bg-white/5 border border-main-border'}
                                        `}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div className="p-4 2xl:max-h-112.5 max-h-80 overflow-y-auto custom-scrollbar bg-main-bg/30">
                            {filteredResults.length === 0 ? (
                                <div className="py-12 text-center">
                                    <p className="text-secondary-text">Nenhum resultado para "<span className="text-primary-text font-bold">{query}</span>"</p>
                                </div>
                            ) : (
                                <div className="space-y-1">
                                    <h3 className="px-3 text-sm font-bold text-secondary-text mb-3">Resultados Correspondentes</h3>
                                    
                                    {filteredResults.map((item) => (
                                        <motion.div
                                            layout
                                            key={item.id}
                                            onClick={() => handleNavigate(item.path, item.action)}
                                            className="group flex items-center justify-between p-4 rounded-2xl cursor-pointer hover:bg-accent/10 border border-transparent hover:border-accent/20 transition-all"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 bg-card-primary border border-main-border rounded-xl text-secondary-text group-hover:text-accent group-hover:border-accent/30 transition-colors">
                                                    {item.icon ? <item.icon size={18} /> : <FiFileText size={18} />}
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-primary-text group-hover:text-white transition-colors">{item.title}</p>
                                                    <p className="text-[10px] text-secondary-text uppercase tracking-tight mt-0.5">
                                                        {item.detail || item.type}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='flex items-center gap-3'>
                                                <span className="px-2 py-1 text-[9px] font-black rounded-md bg-main-bg border border-main-border text-secondary-text group-hover:text-accent transition-colors uppercase tracking-widest">
                                                    {item.tag}
                                                </span>
                                                <FiCommand className='opacity-0 group-hover:opacity-30 text-white transition-opacity' size={12}/>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>


                        <div className='p-4 bg-white/2 border-t border-main-border flex justify-between items-center text-[10px] text-secondary-text font-bold uppercase tracking-widest'>
                             <span>PoinTr Search Intelligence</span>
                             <div className='flex items-center gap-4'>
                                <span className='flex items-center gap-1'><FiCommand size={10}/> + K para abrir</span>
                                <span className='flex items-center gap-1'><FiCommand size={10}/> + P para ações</span>
                             </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default GlobalSearchModal;