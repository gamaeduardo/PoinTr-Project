import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPlus, FiLogIn, FiArrowRight, FiBriefcase, FiCheck } from 'react-icons/fi';
import { useCompanyStore } from "../store/useCompanyStore";

const AddCompanyModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('selection');
    const { addCompany } = useCompanyStore();
    const [formData, setFormData] = useState({ name: '', workers: '', color: '#6366f1', plan: 'Pro' });

    const handleCreate = (e) => {
        e.preventDefault();
        addCompany(formData);
        onClose();
        setStep('selection');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-150 flex items-center justify-center p-4">
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={onClose} className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-card-primary border border-main-border w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
                    >

                        <div className="p-5 border-b border-main-border flex justify-between items-center bg-main-bg/30">
                            <h2 className="text-xl font-bold tracking-tight text-white">
                                {step === 'selection' ? 'Nova Organização' : step === 'create' ? 'Configurar Empresa' : 'Entrar em Empresa'}
                            </h2>
                            <button onClick={onClose} className="p-2 cursor-pointer hover:bg-white/5 rounded-full text-secondary-text transition-colors">
                                <FiX size={20} />
                            </button>
                        </div><div className="p-8">

                        {/* SELEÇÃO (Criar ou Entrar) */}
                        {step === 'selection' && (
                            <div className="grid gap-4">
                                <button 
                                    onClick={() => setStep('create')}
                                    className="flex cursor-pointer items-center p-6 bg-accent/10 border border-accent/20 rounded-3xl group hover:bg-accent transition-all duration-300"
                                >
                                    <div className="p-4 bg-accent rounded-2xl text-white group-hover:bg-white group-hover:text-accent transition-colors">
                                        <FiPlus size={24} />
                                    </div>
                                    <div className="text-left ml-4">
                                        <p className="font-bold text-white group-hover:text-white">Criar Nova Empresa</p>
                                        <p className="text-xs text-secondary-text group-hover:text-white/80">Fundar um novo ambiente de gestão.</p>
                                    </div>
                                    <FiArrowRight className="ml-auto text-accent group-hover:text-white" />
                                </button>

                                <button 
                                    onClick={() => setStep('join')}
                                    className="flex cursor-pointer items-center p-6 bg-white/5 border border-main-border rounded-3xl group hover:border-white/20 transition-all"
                                >
                                    <div className="p-4 bg-slate-800 rounded-2xl text-gray-400 group-hover:text-white transition-colors">
                                        <FiLogIn size={24} />
                                    </div>
                                    <div className="text-left ml-4">
                                        <p className="font-bold text-white">Entrar em Existente</p>
                                        <p className="text-xs text-secondary-text">Usar um código de convite enviado.</p>
                                    </div>
                                    <FiArrowRight className="ml-auto text-secondary-text" />
                                </button>
                            </div>
                        )}

                        {/* FORMULÁRIO */}
                        {step === 'create' && (
                            <form onSubmit={handleCreate} className="space-y-6">
                            <div>
                                <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">Nome da Organização</label>
                                <input 
                                    required
                                    className="w-full bg-main-bg border border-main-border rounded-2xl px-4 py-3 text-white focus:border-accent outline-none transition-all"
                                    placeholder="Ex: PoinTr Tech HQ"
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">Qtd. Funcionários</label>
                                <input 
                                    type="number"
                                    className="w-full bg-main-bg border border-main-border rounded-2xl px-4 py-3 text-white outline-none"
                                    placeholder="0"
                                    onChange={(e) => setFormData({...formData, workers: e.target.value})}
                                />
                                </div>
                                <div>
                                <label className="text-[10px] uppercase font-bold text-secondary-text tracking-widest mb-2 block">Cor de Identidade</label>
                                <div className="flex gap-2 py-2">
                                    {['#6366f1', '#ec4899', '#10b981', '#f59e0b'].map(c => (
                                    <button 
                                        key={c} type="button" 
                                        onClick={() => setFormData({...formData, color: c})}
                                        className={`w-8 h-8 cursor-pointer rounded-full border-2 transition-transform ${formData.color === c ? 'scale-125 border-white' : 'border-transparent'}`}
                                        style={{ backgroundColor: c }}
                                    />
                                    ))}
                                </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-main-border flex gap-3">
                                <button type="button" onClick={() => setStep('selection')} className="flex-1 cursor-pointer py-4 text-secondary-text font-bold text-sm">Voltar</button>
                                <button type="submit" className="flex-2 cursor-pointer bg-accent py-4 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                                    <FiCheck /> Concluir Cadastro
                                </button>
                            </div>
                            </form>
                        )}

                        {step === 'join' && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="space-y-8"
                            >
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-accent/'0 text-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <FiLogIn size={32} />
                                    </div>
                                    <p className="text-secondary-text text-sm px-6">
                                        Digite o código de 6 dígitos enviado pelo seu administrador para se vincular à organização.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex justify-center gap-3">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <input
                                                key={i}
                                                type="text"
                                                maxLength="1"
                                                className="w-12 h-14 bg-main-bg border border-main-border rounded-xl text-center text-xl font-bold text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                                            />
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <button
                                            onClick={() => {
                                                onClose();
                                                setStep('selection')
                                            }}
                                            className="w-full cursor-pointer bg-accent py-4 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-accent/20 hover:bg-accent/90 transition-all"
                                        >
                                            Verificar Código
                                        </button>

                                        <button
                                            onClick={() => setStep('selection')}
                                            className="w-full cursor-pointer py-2 text-[10px] uppercase tracking-widest font-bold text-secondary-text hover:text-white transition-colors"
                                        >
                                            Voltar para seleções
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                                    <p className="text-[10px] text-gray-500 text-center">
                                            Não tem um código? Solicite ao RH ou ao gerente do seu departamento.
                                    </p>
                                </div>

                            </motion.div>
                        )}
                    </div>
                </motion.div>
                </div>
            )}
            </AnimatePresence>
  );
};

export default AddCompanyModal;