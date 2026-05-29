import React from "react";
import { FiShield, FiLock, FiCheck } from "react-icons/fi";

const SecurityTab = () => {

    return (
        <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-main-border/10 pb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2"><FiShield className="text-accent-hover" /> Auditoria de Segurança de Autenticação</h4>
                <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded bg-accent/10 text-accent-hover border border-accent/20 flex items-center gap-1">
                    <FiCheck size={11} /> Criptografia Ativa
                </span>
            </div>
            <div className="space-y-3 text-xs font-medium text-slate-300">
                <div className="flex justify-between items-center bg-main-bg p-3 rounded-xl border border-main-border/10">
                    <span className="flex items-center gap-2 text-slate-400"><FiLock size={14} className="text-accent"/> Hashing de Senhas</span>
                    <span className="text-white font-bold text-[11px]">BCRYPT v2.4 (Ativo)</span>
                </div>
                <div className="flex justify-between items-center bg-main-bg p-3 rounded-xl border border-main-border/10">
                    <span className="flex items-center gap-2 text-slate-400"><FiShield size={14} className="text-accent"/> Antifraude por Geolocalização Mobile</span>
                    <span className="text-accent-hover font-bold text-[11px]">Monitorando</span>
                </div>
            </div>
        </div>
    )
}

export default SecurityTab;