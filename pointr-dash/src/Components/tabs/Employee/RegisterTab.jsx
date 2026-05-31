import React, { useState } from "react";
import { FiUser, FiMail, FiLock, FiPhone, FiBriefcase, FiClock, FiDollarSign, FiCheckSquare, FiAlertCircle, FiLayers } from "react-icons/fi";
import { motion } from "framer-motion";
import { useToast } from "../../ToastContext";

const RegisterTab = ({ aoSucesso }) => {
    const { addToast } = useToast();

    // Inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senhaBase, setSenhaBase] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cargo, setCargo] = useState("");
    const [setor, setSetor] = useState("");
    const [cargaHoraria, setCargaHoraria] = useState("44");
    const [turno, setTurno] = useState("");
    const [salario, setSalario] = useState("");
    
    
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    const handleCadastro = (e) => {
        e.preventDefault();

        // Validação básica
        if (!nome.trim() || !email.trim() || !senhaBase.trim() || !cargo.trim() || !setor || !turno || !salario) {
            setErro("Todos os parâmetros operacionais e financeiros são obrigatórios para completar o registro.");
            return;
        }

        setErro("");
        setCarregando(true);

        setTimeout(() => {
            setCarregando(false);
            addToast(`Inclusão de ${nome.split(" ")[0]} registrada com sucesso no ecossistema PoinTr!`, "sucesso");
            
            // Reset dos inputsssss
            setNome("");
            setEmail("");
            setSenhaBase("");
            setTelefone("");
            setCargo("");
            setSetor("");
            setCargaHoraria("44");
            setTurno("");
            setSalario("");

            if (aoSucesso) aoSucesso();
        }, 1200);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-card-primary border border-primary-text/5 rounded-3xl p-6 shadow-2xl md:p-10 relative overflow-hidden"
        >
            
            <div className="mb-8 border-b border-main-border/10 pb-6">
                <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(32,48,190,0.6)] animate-pulse" />
                    <h3 className="text-xl font-bold tracking-tight text-primary-text">Ficha de Admissão de Colaborador</h3>
                </div>
                <p className="text-xs text-secondary-text font-medium mt-1 max-w-3xl leading-relaxed">
                    Cadastre o perfil operacional completo. O funcionário será matriculado no sistema central e receberá as diretrizes de geolocalização e token de primeiro acesso para o aplicativo mobile de forma síncrona.
                </p>
            </div>

            <form onSubmit={handleCadastro} className="space-y-8 relative z-10 w-full max-w-5xl">
                
                {/* NOTIFICAÇÃO DE ERRO */}
                {erro && (
                    <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-xs font-semibold text-red-400 flex items-center gap-2.5"
                    >
                        <FiAlertCircle size={15} className="shrink-0" />
                        <span>{erro}</span>
                    </motion.div>
                )}

                <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-1">01. Identificação & Credenciais</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Nome Completo</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiUser size={15} /></div>
                                <input type="text" placeholder="Ex: John Wick" value={nome} onChange={(e) => setNome(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">E-mail Corporativo</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiMail size={15} /></div>
                                <input type="email" placeholder="john.wick@empresa.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Senha Base (Primeiro Acesso Mobile)</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiLock size={15} /></div>
                                <input type="text" placeholder="Defina a senha temporária do app" value={senhaBase} onChange={(e) => setSenhaBase(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Telefone Contato</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiPhone size={15} /></div>
                                <input type="text" placeholder="(11) 99999-0000" value={telefone} onChange={(e) => setTelefone(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 pt-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-1">02. Estrutura Organizacional & Escalas</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Cargo / Função</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiBriefcase size={15} /></div>
                                <input type="text" placeholder="Ex: Engenheiro de Software" value={cargo} onChange={(e) => setCargo(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Setor Vinculado</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiLayers size={15} /></div>
                                <select value={setor} onChange={(e) => setSetor(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text focus:outline-none focus:border-accent appearance-none cursor-pointer">
                                    <option value="" disabled>Selecione...</option>
                                    <option value="tech" className="bg-sidebar-primary">Tecnologia & Dev</option>
                                    <option value="rh" className="bg-sidebar-primary">Recursos Humanos</option>
                                    <option value="fin" className="bg-sidebar-primary">Financeiro</option>
                                    <option value="op" className="bg-sidebar-primary">Operações Gerais</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[9px]">▼</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Turno Operacional</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiClock size={15} /></div>
                                <select value={turno} onChange={(e) => setTurno(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text focus:outline-none focus:border-accent appearance-none cursor-pointer">
                                    <option value="" disabled>Selecione...</option>
                                    <option value="comercial" className="bg-sidebar-primary">Comercial (08:00 - 17:00)</option>
                                    <option value="matutino" className="bg-sidebar-primary">Matutino (06:00 - 15:00)</option>
                                    <option value="noturno" className="bg-sidebar-primary">Noturno Estrito (22:00 - 05:00)</option>
                                    <option value="flexivel" className="bg-sidebar-primary">Banco de Horas Flexível</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[9px]">▼</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 pt-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-1">03. Contrato & Parâmetros Financeiros</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Carga Horária Mensal (Horas contratadas)</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiClock size={15} /></div>
                                <select value={cargaHoraria} onChange={(e) => setCargaHoraria(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text focus:outline-none focus:border-accent appearance-none cursor-pointer">
                                    <option value="44" className="bg-sidebar-primary">44 Horas Semanais (Padrão CLT)</option>
                                    <option value="40" className="bg-sidebar-primary">40 Horas Semanais (Segunda a Sexta)</option>
                                    <option value="30" className="bg-sidebar-primary">30 Horas Semanais (Estágio / Meio Período)</option>
                                    <option value="220" className="bg-sidebar-primary">Escala 12x36 Alternada</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[9px]">▼</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Salário (R$)</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiDollarSign size={15} /></div>
                                <input type="number" placeholder="Ex: 4500" value={salario} onChange={(e) => setSalario(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-main-border/10 flex justify-end">
                    <button 
                        type="submit" 
                        disabled={carregando}
                        className="w-full sm:w-auto h-12 px-8 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-primary-text font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(32,48,190,0.2)] disabled:cursor-not-allowed"
                    >
                        {carregando ? (
                            <div className="w-5 h-5 border-2 border-primary-text/30 border-t-primary-text rounded-full animate-spin" />
                        ) : (
                            <>
                                Registrar Colaborador <FiCheckSquare size={14} />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default RegisterTab;