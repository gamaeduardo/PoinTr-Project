import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiCheck, FiLayers, FiActivity, FiShield, FiPlus, FiMaximize, FiTrash2 } from 'react-icons/fi';
import { useToast } from './ToastContext';

// NÃO FINALIZADO
const LayoutBuilderModal = ({ isOpen, onClose }) => {
    const { addToast } = useToast();
    
    // abas
    const [abaMalha, setAbaMalha] = useState("visao-geral");

    // Widgets de cada aba
    const [layoutsPorAba, setLayoutsPorAba] = useState({
        "visao-geral": [
            { id: 'Desempenho Semanal', w: 6, h: 4 },
            { id: 'Métricas Rápidas', w: 4, h: 2 },
        ],
        "auditoria": [
            { id: 'Banco de Horas Geral', w: 5, h: 3 },
            { id: 'Custos com Horas Extras', w: 5, h: 3 },
        ],
        "seguranca": [
            { id: 'Mapa de Calor de Dispositivos', w: 8, h: 4 },
        ]
    });

    // todos os widgets
    const availableWidgets = [
        { id: 'prod-1', name: 'Desempenho Semanal', minW: 6, minH: 4, desc: "Gráficos de BI e evolução diária" },
        { id: 'stats-1', name: 'Métricas Rápidas', minW: 4, minH: 2, desc: "Faltas, presenças e inconsistências" },
        { id: 'banco-1', name: 'Banco de Horas Geral', minW: 5, minH: 3, desc: "Saldos positivos e negativos da equipe" },
        { id: 'financeiro-1', name: 'Custos com Horas Extras', minW: 5, minH: 3, desc: "Projeção financeira baseada no valor da hora" },
        { id: 'geo-1', name: 'Mapa de Calor de Dispositivos', minW: 8, minH: 4, desc: "Geolocalização e IPs ativos por mapa" },
    ];

    const layoutAtual = layoutsPorAba[abaMalha] || [];

    // Adiciona o widget
    const handleAdicionarWidget = (widget) => {
        // Verifica se o widget já está na malha atual
        if (layoutAtual.some(item => item.id === widget.name)) {
            addToast("Este monitor já está acoplado na malha atual.", "erro");
            return;
        }

        const novoItem = { id: widget.name, w: widget.minW, h: widget.minH };
        setLayoutsPorAba(prev => ({
            ...prev,
            [abaMalha]: [...prev[abaMalha], novoItem]
        }));
        addToast(`"${widget.name}" fixado na malha de ${getAbaNome(abaMalha)}!`, "sucesso");
    };

    // Altera o tamanho dinamicamente na malha
    const handleRedimensionar = (id) => {
        setLayoutsPorAba(prev => ({
            ...prev,
            [abaMalha]: prev[abaMalha].map(item => {
                if (item.id === id) {
                    // Se estiver pequeno expande, se estiver grande encolhe, simples e complexo ao mesmo tempo
                    const novaLargura = item.w === 4 ? 6 : item.w === 6 ? 8 : 4;
                    const novaAltura = item.h === 2 ? 3 : item.h === 3 ? 4 : 2;
                    return { ...item, w: novaLargura, h: novaAltura };
                }
                return item;
            })
        }));
        addToast("Dimensões do monitor atualizadas na malha.", "info");
    };

    // Remove o widget da malhazinha
    const handleRemoverWidget = (id) => {
        setLayoutsPorAba(prev => ({
            ...prev,
            [abaMalha]: prev[abaMalha].filter(item => item.id !== id)
        }));
        addToast("Monitor removido da grade.", "erro");
    };

    const handleSave = () => {
        addToast("Novas estruturas de grid homologadas para o painel!", "sucesso");
        onClose();
    };

    const getAbaNome = (id) => {
        if (id === "visao-geral") return "Visão Geral";
        if (id === "auditoria") return "Auditoria Contábil";
        return "Segurança Geográfica";
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10 font-sans">

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-[#01011a]/90 backdrop-blur-md"
                />

                <motion.div 
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    className="relative bg-[#090928] w-full max-w-7xl h-full max-h-[90vh] rounded-[2.5rem] border border-main-border/30 flex flex-col overflow-hidden shadow-2xl z-10"
                >
                    
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center p-6 border-b border-main-border/10 bg-[#04041c]">
                        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                            <div className="p-3 bg-accent/10 border border-accent/20 rounded-2xl text-accent">
                                <FiLayers size={22} />
                            </div>
                            <div>
                                <h2 className="text-white font-bold text-lg italic tracking-tight">Arquitetura de Telas (Grid Construtor)</h2>
                                <p className="text-secondary-text text-xs font-medium mt-0.5">Customize a disposição e tamanho dos monitores analíticos das abas gerais.</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                            <button onClick={onClose} className="px-5 py-2.5 text-slate-400 hover:text-white text-xs font-bold transition-colors cursor-pointer">
                                Cancelar
                            </button>
                            <button onClick={handleSave} className="flex items-center space-x-2 bg-accent hover:bg-accent/90 px-6 py-2.5 rounded-xl text-white font-bold text-xs transition-all cursor-pointer shadow-[0_4px_15px_rgba(32,48,190,0.2)]">
                                <FiCheck /> <span>Salvar Estruturas</span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-1 overflow-hidden">
                        
                        {/* MENU DE COMPONENTES */}
                        <aside className="w-80 bg-[#04041c]/40 p-6 border-r border-main-border/10 overflow-y-auto no-scrollbar">
                            <h3 className="text-secondary-text text-[10px] uppercase tracking-[0.2em] font-black mb-5 pl-1">Monitores Disponíveis</h3>
                            <div className="space-y-3">
                                {availableWidgets.map((w) => (
                                    <div 
                                        key={w.id}
                                        className="p-4 bg-[#090928] rounded-2xl border border-main-border/40 flex flex-col justify-between group transition-all relative overflow-hidden"
                                    >
                                        <div>
                                            <p className="text-white font-bold text-xs tracking-tight">{w.name}</p>
                                            <p className="text-[10px] text-slate-500 font-medium mt-0.5 leading-relaxed">{w.desc}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 mt-2 border-t border-main-border/5">
                                            <span className="px-2 py-0.5 bg-[#01011a] rounded-md text-[9px] text-accent font-black uppercase tracking-wider">{w.minW}x{w.minH} Módulos</span>
                                            <button 
                                                type="button"
                                                onClick={() => handleAdicionarWidget(w)}
                                                className="w-7 h-7 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors cursor-pointer"
                                                title="Injetar na Malha"
                                            >
                                                <FiPlus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>

                        {/* PARTE DA MALHA E ABAS */}
                        <main className="flex-1 flex flex-col bg-[#01011a]/40 overflow-hidden">
                            
                            <div className="px-6 py-3 bg-[#04041c]/30 border-b border-main-border/10 flex gap-2">
                                {[
                                    { id: "visao-geral", titulo: "Visão Geral", ic: FiActivity },
                                    { id: "auditoria", titulo: "Auditoria Contábil", ic: FiCheckCircle },
                                    { id: "seguranca", titulo: "Segurança Geográfica", ic: FiShield }
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setAbaMalha(tab.id)}
                                        className={`flex items-center gap-2 h-9 px-4 text-[10px] font-black uppercase tracking-wider rounded-xl transition-all border cursor-pointer ${
                                            abaMalha === tab.id 
                                            ? "bg-accent border-accent text-white shadow-[0_4px_10px_rgba(32,48,190,0.2)]" 
                                            : "bg-[#090928] border-main-border/40 text-secondary-text hover:text-white"
                                        }`}
                                    >
                                        <tab.ic size={12} />
                                        {tab.titulo}
                                    </button>
                                ))}
                            </div>

                            {/* CONTAINER DA GRADE DE 15 COLUNAS */}
                            <div className="flex-1 p-6 overflow-y-auto no-scrollbar relative">
                                <div
                                    className="grid gap-2 border border-main-border/30 bg-[#01011a] rounded-2xl p-3 relative min-h-125"
                                    style={{ 
                                        display: 'grid', 
                                        gridTemplateColumns: 'repeat(15, 1fr)', 
                                        gridAutoRows: '50px' 
                                    }}
                                >
                                    {Array.from({ length: 90 }).map((_, i) => (
                                        <div key={i} className="border border-main-border/5 rounded-md pointer-events-none" />
                                    ))}

                                    {/* RENDERIZAÇÃO DOS CARDS NA ABA ATIVA */}
                                    <AnimatePresence>
                                        {layoutAtual.map(item => (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                style={{
                                                    gridColumn: `span ${item.w}`,
                                                    gridRow: `span ${item.h}`,
                                                }}
                                                className="rounded-2xl flex flex-col justify-between p-4 text-[10px] font-bold text-white border border-accent/30 bg-accent/5 shadow-inner group relative overflow-hidden backdrop-blur-xs"
                                            >
                                                <div className="flex justify-between items-start">
                                                    <span className="uppercase tracking-widest text-[10px] font-black text-slate-200">{item.id}</span>
                                                    
                                                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                                        <button 
                                                            type="button"
                                                            onClick={() => handleRedimensionar(item.id)}
                                                            className="w-6 h-6 rounded-md bg-slate-900 border border-main-border/40 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer"
                                                            title="Mudar Escala"
                                                        >
                                                            <FiMaximize size={12} />
                                                        </button>
                                                        <button 
                                                            type="button"
                                                            onClick={() => handleRemoverWidget(item.id)}
                                                            className="w-6 h-6 rounded-md bg-slate-900 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white cursor-pointer"
                                                            title="Remover"
                                                        >
                                                            <FiTrash2 size={12} />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between text-[9px] text-slate-500 font-mono font-medium pt-2 border-t border-main-border/5">
                                                    <span>Grade Alocada</span>
                                                    <span className="text-accent font-bold px-1.5 py-0.5 bg-accent/10 rounded">{item.w}x{item.h}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>

                                    {/* MENSAGEM CASO A MALHA FIQUE VAZIA */}
                                    {layoutAtual.length === 0 && (
                                        <div className="absolute inset-0 flex items-center justify-center text-secondary-text text-xs font-medium pointer-events-none">
                                            Malha vazia. Clique no botão de "+" à esquerda para injetar monitores nesta aba.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </main>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default LayoutBuilderModal;