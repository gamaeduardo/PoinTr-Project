import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from "react-icons/fi";

import somNotificacao from "../assets/audio/notification.mp3"

export const Toast = ({ id, mensagem, tipo = "sucesso", aoFechar }) => {

    useEffect(() => {
        // 🔊 Toca o seu arquivo .mp3 assim que o Toast entra na tela
        try {
            const audio = new Audio(somNotificacao);
            audio.volume = 0.4; // Ajuste o volume de 0.0 a 1.0 para não estourar no projetor
            audio.play();
        } catch (e) {
            console.warn("Navegador bloqueou a reprodução automática de áudio:", e);
        }

        // Timer de 3.5 segundos para sumir
        const timer = setTimeout(() => {
            aoFechar(id);
        }, 3500);

        return () => clearTimeout(timer);
    }, [id, aoFechar]);

    
    const configs = {
        sucesso: { icone: FiCheckCircle, corIcone: "text-emerald-400", corBarra: "bg-emerald-500", corBorda: "border-emerald-500/20" },
        erro: { icone: FiAlertCircle, corIcone: "text-red-400", corBarra: "bg-red-500", corBorda: "border-red-500/20" },
        info: { icone: FiInfo, corIcone: "text-[#2030be]", corBarra: "bg-[#2030be]", corBorda: "border-[#2030be]/20" }
    };

    const config = configs[tipo] || configs.sucesso;
    const IconeComponente = config.icone;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`w-80 bg-[#090928] border ${config.corBorda} rounded-xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-start gap-3 relative overflow-hidden pointer-events-auto`}
        >
            {/* Ícone Indicativo */}
            <div className={`${config.corIcone} mt-0.5 shrink-0`}>
                <IconeComponente size={16} />
            </div>
            

            <div className="flex-1 min-w-0 pr-2">
                <p className="text-xs font-semibold text-white leading-relaxed tracking-wide">
                    {mensagem}
                </p>
            </div>

            <button
                onClick={() => aoFechar(id)}
                className="text-slate-600 hover:text-white transition-colors cursor-pointer shrink-0"
            >
                <FiX size={14} />
            </button>

            {/* barra de tempo */}
            <motion.div 
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className={`absolute bottom-0 left-0 h-0.5 ${config.corBarra}`}
            />
        </motion.div>
    );
};

export default Toast;