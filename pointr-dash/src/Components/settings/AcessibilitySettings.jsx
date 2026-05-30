import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEye, FiMaximize2, FiCheck } from "react-icons/fi";
import { useToast } from "../ToastContext"

const AcessibilitySettings = () => {
    const { addToast } = useToast();

    const [altoContraste, setAltoContraste] = useState(() => {
        return localStorage.getItem("pointr-contrast") === "true";
    });
    const [zoomInterface, setZoomInterface] = useState(() => {
        return localStorage.getItem("pointr-zoom") || "100";
    });

    
    useEffect(() => {
        const raiz = document.documentElement;
        if (altoContraste) {
            // Filtro de alto contraste (Não finalizado)
            raiz.style.filter = "contrast(1.25) saturate(1.1)";
            localStorage.setItem("pointr-contrast", "true");
        } else {
            raiz.style.filter = "none";
            localStorage.setItem("pointr-contrast", "false");
        }
    }, [altoContraste]);

    // Altera na fonte do HTML, pois o Tailwind usa o rem como base em tudo, graças a Deus
    useEffect(() => {
        const raiz = document.documentElement;

        if (zoomInterface === "90") {
            raiz.style.fontSize = "14px";
        } else if (zoomInterface === "120") {
            raiz.style.fontSize = "18px";
        } else {
            raiz.style.fontSize = "16px";
        }
        localStorage.setItem("pointr-zoom", zoomInterface);
    }, [zoomInterface]);

    const alternarContraste = () => {
        setAltoContraste(!altoContraste);
        addToast(
            !altoContraste ? "Modo de alto contraste ativado." : "Modo padrão de cores restaurado.",
            "info"
        );
    };

    const handleZoomChange = (e) => {
        const novoZoom = e.target.value;
        setZoomInterface(novoZoom);
        
        // Notificação
        if (novoZoom === "100") {
            addToast("Escala da interface redefinida para o padrão.", "sucesso");
        } else {
            addToast(`Interface redimensionada para ${novoZoom}%.`, "info");
        }
    };

    return (
        <div className="p-8 space-y-8 h-full overflow-y-auto max-w-xl">
            
            <div className="flex items-center justify-between p-5 bg-[#090928] border border-main-border/30 rounded-2xl group hover:border-[#2030be]/30 transition-colors">
                <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                        altoContraste ? 'bg-[#2030be]/10 border-[#2030be]/30 text-[#2030be]' : 'bg-slate-900 border-main-border/40 text-slate-500'
                    }`}>
                        <FiEye size={18} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-white tracking-tight">Modo de Alto Contraste</p>
                        <p className="text-[10px] text-secondary-text uppercase tracking-wider font-medium mt-0.5">Otimiza as bordas e fontes para baixa visão</p>
                    </div>
                </div>

                <div 
                    onClick={alternarContraste}
                    className={`w-12 h-6 rounded-full relative cursor-pointer p-1 transition-colors duration-300 ${
                        altoContraste ? "bg-[#2030be]" : "bg-slate-800 border border-main-border/30"
                    }`}
                >
                    <motion.div 
                        layout
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
                        style={{ left: altoContraste ? "24px" : "0px" }}
                    >
                        {altoContraste && <FiCheck size={10} className="text-[#2030be] stroke-3" />}
                    </motion.div>
                </div>
            </div>

            <div className="p-5 bg-[#090928] border border-main-border/30 rounded-2xl group hover:border-[#2030be]/30 transition-colors space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-main-border/40 text-slate-500 flex items-center justify-center">
                        <FiMaximize2 size={16} />
                    </div>
                    <div>
                        <label htmlFor="zoom-range" className="text-xs font-bold text-white tracking-tight block">Escala Global da Interface</label>
                        <p className="text-[10px] text-secondary-text uppercase tracking-wider font-medium mt-0.5">Redimensiona painéis, fontes e botões proporcionalmente</p>
                    </div>
                </div>

                <div className="pt-2">
                    <input 
                        id="zoom-range"
                        type="range" 
                        min="90" 
                        max="120" 
                        step="10"
                        value={zoomInterface}
                        onChange={handleZoomChange}
                        className="w-full h-1.5 bg-[#01011a] border border-main-border/40 rounded-lg appearance-none cursor-pointer accent-[#2030be]" 
                    />
                    <div className="flex justify-between mt-3 text-[9px] text-secondary-text font-black uppercase tracking-widest">
                        <span className={zoomInterface === "90" ? "text-[#2030be]" : ""}>90% (Compacto)</span>
                        <span className={zoomInterface === "100" ? "text-white" : ""}>100% (Padrão)</span>
                        <span className={zoomInterface === "120" ? "text-[#2030be]" : ""}>120% (Ampliado)</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AcessibilitySettings;