import React from "react";
import {  FiBookmark } from "react-icons/fi";

const ComplianceTab = () => {

    return (
        <div className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl flex items-center justify-center">
                    <FiBookmark size={18} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-white">Conformidade Legal & Regulatório</h4>
                    <p className="text-[11px] text-secondary-text mt-0.5">Segurança jurídica alinhada com as diretrizes do Ministério do Trabalho.</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-medium">
                <div className="bg-main-bg/60 border border-main-border/20 p-4 rounded-xl flex flex-col justify-between gap-3">
                    <span className="text-accent"><FiBookmark size={16} /></span>
                    <div>
                        <h5 className="font-bold text-white text-[11px] mb-1">Portaria 671 / MTE</h5>
                        <p className="text-[11px] text-slate-400 font-normal leading-relaxed">Arquitetura de dados preparada para geração de arquivos fiscais AFD e AEFI.</p>
                    </div>
                </div>
                <div className="bg-main-bg/60 border border-main-border/20 p-4 rounded-xl flex flex-col justify-between gap-3">
                    <span className="text-accent"><FiBookmark size={16} /></span>
                    <div>
                        <h5 className="font-bold text-white text-[11px] mb-1">Diretrizes da LGPD</h5>
                        <p className="text-[11px] text-slate-400 font-normal leading-relaxed">Dados pessoais e registros biométricos anonimizados e protegidos contra vazamentos.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComplianceTab;