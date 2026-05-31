import React, { useState } from "react";
import { FiCheckSquare, FiSliders, FiFileText, FiCalendar, FiFolder } from "react-icons/fi";
import { motion } from "framer-motion";
import { useToast } from "../../ToastContext";

const GeneratorTab = ({ aoSucesso }) => {
    const { addToast } = useToast();

    // inputs
    const [tipoRelatorio, setTipoRelatorio] = useState("");
    const [setor, setSetor] = useState("all");
    const [formato, setFormato] = useState("pdf");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    const [nomeArquivo, setNomeArquivo] = useState("");
    
    const [incluirHorasExtras, setIncluirHorasExtras] = useState(true);
    const [incluirGeolocalizacao, setIncluirGeolocalizacao] = useState(false);
    const [incluirAtestados, setIncluirAtestados] = useState(true);
    const [anonimizarDados, setAnonimizarDados] = useState(false);

    const [processando, setProcessando] = useState(false);

    const handleGerar = (e) => {
        e.preventDefault();
        
        if (!tipoRelatorio || !dataInicio || !dataFim || !nomeArquivo.trim()) {
            addToast("Por favor, preencha o período, o tipo e dê um nome para o arquivo.", "erro");
            return;
        }

        setProcessando(true);
        addToast("Compilando dados do período selecionado...", "info");

        setTimeout(() => {
            setProcessando(false);
            addToast(`Relatório "${nomeArquivo}.${formato}" gerado e salvo no histórico!`, "sucesso");
            
            // Limpa o forms
            setTipoRelatorio("");
            setSetor("all");
            setDataInicio("");
            setDataFim("");
            setNomeArquivo("");
            
            if (aoSucesso) aoSucesso(); 
        }, 1500);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl md:p-10 relative overflow-hidden"
        >
            
            <div className="mb-8 border-b border-main-border/10 pb-6">
                <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_10px_rgba(32,48,190,0.6)]" />
                    <h3 className="text-xl font-bold tracking-tight text-primary-text">Exportar Relatórios</h3>
                </div>
                <p className="text-xs text-secondary-text font-medium mt-1 max-w-3xl leading-relaxed">
                    Escolha o tipo de documento, defina o período desejado e selecione as opções extras para baixar as informações da sua equipe.
                </p>
            </div>

            <form onSubmit={handleGerar} className="space-y-8 w-full max-w-5xl">
                
                <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-1">Configurações do Arquivo</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        
                        <div className="flex flex-col gap-1.5 md:col-span-2">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Nome do Arquivo</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiFileText size={15} /></div>
                                <input 
                                    type="text" 
                                    placeholder="Ex: relatorio_ponto_junho" 
                                    value={nomeArquivo} 
                                    onChange={(e) => setNomeArquivo(e.target.value)} 
                                    className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors" 
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Formato do Arquivo</label>
                            <div className="flex bg-main-border border border-main-border/40 rounded-xl p-1 h-12">
                                {['pdf', 'xlsx', 'csv'].map((f) => (
                                    <button 
                                        type="button" 
                                        key={f} 
                                        onClick={() => setFormato(f)} 
                                        className={`flex-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                                            formato === f ? 'bg-accent text-primary-text shadow' : 'text-secondary-text hover:text-slate-300'
                                        }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Tipo de Relatório</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiSliders size={15} /></div>
                                <select value={tipoRelatorio} onChange={(e) => setTipoRelatorio(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text focus:outline-none focus:border-accent appearance-none cursor-pointer">
                                    <option value="" disabled>Selecione o que deseja puxar...</option>
                                    <option value="ponto" className="bg-[#090928]">Espelho de Ponto Fechado (Portaria 671)</option>
                                    <option value="extra" className="bg-[#090928]">Relatório de Horas Extras e Custos</option>
                                    <option value="absent" className="bg-[#090928]">Faltas, Atrasos e Atestados</option>
                                    <option value="geo" className="bg-[#090928]">Histórico de Localização dos Pontos</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[9px]">▼</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Filtrar por Setor</label>
                            <div className="relative">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"><FiFolder size={15} /></div>
                                <select value={setor} onChange={(e) => setSetor(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl pl-12 pr-4 text-xs text-primary-text focus:outline-none focus:border-accent appearance-none cursor-pointer">
                                    <option value="all" className="bg-[#090928]">A empresa inteira (Geral)</option>
                                    <option value="tech" className="bg-[#090928]">Tecnologia & Dev</option>
                                    <option value="rh" className="bg-[#090928]">Recursos Humanos</option>
                                    <option value="fin" className="bg-[#090928]">Financeiro</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[9px]">▼</div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4 pt-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-1">Período das Informações</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">De (Data Início)</label>
                            <div className="relative">
                                <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent calendar-dark" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Até (Data Fim)</label>
                            <div className="relative">
                                <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} className="w-full h-12 bg-main-border border border-main-border/40 rounded-xl px-4 text-xs text-primary-text focus:outline-none focus:border-accent calendar-dark" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="space-y-4 pt-2">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-accent pl-1">O que incluir no documento?</h4>
                    <div className="bg-main-border border border-main-border/20 rounded-2xl p-6 space-y-4">
                        
                        <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none group">
                            <input type="checkbox" checked={incluirHorasExtras} onChange={(e) => setIncluirHorasExtras(e.target.checked)} className="w-4 h-4 rounded border-main-border/60 bg-[#090928] text-accent focus:ring-0 cursor-pointer accent-accent" />
                            <span className="group-hover:text-primary-text transition-colors">Mostrar os cálculos de banco de horas e horas extras acumuladas</span>
                        </label>

                        <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none group">
                            <input type="checkbox" checked={incluirGeolocalizacao} onChange={(e) => setIncluirGeolocalizacao(e.target.checked)} className="w-4 h-4 rounded border-main-border/60 bg-[#090928] text-accent focus:ring-0 cursor-pointer accent-accent" />
                            <span className="group-hover:text-primary-text transition-colors">Incluir a localização geográfica e o IP de onde os pontos foram batidos</span>
                        </label>

                        <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none group">
                            <input type="checkbox" checked={incluirAtestados} onChange={(e) => setIncluirAtestados(e.target.checked)} className="w-4 h-4 rounded border-main-border/60 bg-[#090928] text-accent focus:ring-0 cursor-pointer accent-accent" />
                            <span className="group-hover:text-primary-text transition-colors">Listar faltas justificadas, férias e os códigos (CIDs) de atestados médicos</span>
                        </label>

                        <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none group">
                            <input type="checkbox" checked={anonimizarDados} onChange={(e) => setAnonimizarDados(e.target.checked)} className="w-4 h-4 rounded border-main-border/60 bg-[#090928] text-accent focus:ring-0 cursor-pointer accent-accent" />
                            <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors font-semibold">Ocultar dados sensíveis dos funcionários para proteção jurídica (Regras da LGPD)</span>
                        </label>
                    </div>
                </div>


                <div className="pt-4 border-t border-main-border/10 flex justify-end">
                    <button 
                        type="submit" 
                        disabled={processando} 
                        className="w-full sm:w-auto h-12 px-8 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-primary-text font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_25px_rgba(32,48,190,0.2)]"
                    >
                        {processando ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            <>Gerar Relatório <FiCheckSquare size={14}/></>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
};

export default GeneratorTab;