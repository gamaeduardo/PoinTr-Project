import React, { useState } from "react";
import { FiX, FiCheck, FiCalendar, FiClock, FiAlignLeft, FiTag } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const AddEventModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        title: '',
        startDateTime: '',
        endDateTime: '',
        description: '',
        color: '#6366f1'
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-200 flex items-center justify-center p-4">
            
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md" 
                />


                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative bg-card-primary border border-main-border p-8 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] w-full max-w-xl overflow-hidden"
                >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-accent to-purple-500 opacity-50" />

                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-2xl font-bold tracking-tighter text-primary-text">
                                Agendar Evento
                            </h2>
                            <p className="text-[10px] text-secondary-text uppercase font-bold tracking-widest mt-1">Sincronização de Calendário</p>
                        </div>
                        <button 
                            onClick={onClose}
                            className="p-2 bg-main-bg border border-main-border rounded-xl text-secondary-text hover:text-white transition-all cursor-pointer"
                        >
                            <FiX size={20} />
                        </button>
                    </div>

                    <form className="space-y-6">
                        <div className="relative">
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary-text tracking-widest mb-2 ml-1">
                                <FiTag className="text-accent" /> Título do Evento
                            </label>
                            <input
                                type="text" 
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                required
                                placeholder="Ex: Reunião de Alinhamento TI"
                                className="w-full p-4 bg-main-bg text-primary-text rounded-2xl border border-main-border focus:border-accent outline-none transition-all placeholder:text-secondary-text/30 font-medium"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary-text tracking-widest mb-2 ml-1">
                                    <FiCalendar className="text-accent" /> Início
                                </label>
                                <input
                                    type="datetime-local"
                                    name="startDateTime"
                                    value={formData.startDateTime}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-main-bg text-primary-text rounded-2xl border border-main-border focus:border-accent outline-none transition-all font-mono text-xs"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary-text tracking-widest mb-2 ml-1">
                                    <FiClock className="text-accent" /> Fim
                                </label>
                                <input
                                    type="datetime-local"
                                    name="endDateTime"
                                    value={formData.endDateTime}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-main-bg text-primary-text rounded-2xl border border-main-border focus:border-accent outline-none transition-all font-mono text-xs"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary-text tracking-widest mb-2 ml-1">
                                <FiAlignLeft className="text-accent" /> Descrição
                            </label>
                            <textarea 
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Detalhes adicionais para a equipe..."
                                className="w-full p-4 bg-main-bg resize-none text-primary-text rounded-2xl border border-main-border focus:border-accent outline-none transition-all placeholder:text-secondary-text/30 font-medium"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-main-border">
                            <span className="text-[9px] text-secondary-text font-bold uppercase italic">* Todos os horários seguem o fuso de Brasília</span>
                            
                            <button 
                                type="submit" 
                                className="px-8 py-4 bg-accent text-white font-bold uppercase text-[11px] rounded-2xl hover:bg-accent/80 transition-all shadow-lg shadow-accent/20 flex items-center gap-3 cursor-pointer group"
                            >
                                <FiCheck size={18} className="group-hover:scale-125 transition-transform" />
                                Salvar Registro
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    )
};

export default AddEventModal;