import React, { useState } from "react";
import { FiCheckSquare, FiFilter, FiSliders, FiFileText } from "react-icons/fi";

const GeneratorTab = () => {

    const [tipoRelatorio, setTipoRelatorio] = useState("");
    const [setor, setSetor] = useState("all");
    const [formato, setFormato] = useState("pdf");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");
    
    // Form não funfa ainda
    const [incluirHorasExtras, setIncluirHorasExtras] = useState(true);
    const [incluirGeolocalizacao, setIncluirGeolocalizacao] = useState(false);
    const [incluirAtestados, setIncluirAtestados] = useState(true);
    const [anonimizarDados, setAnonimizarDados] = useState(false);

    const [processando, setProcessando] = useState(false);

    const handleGerar = (e) => {
        e.preventDefault();
        if (!tipoRelatorio || !dataInicio || !dataFim) {
            alert("Por favor, selecione o tipo de relatório e o período completo.");
            return;
        }

        setProcessando(true);
        setTimeout(() => {
            setProcessando(false);
            alert("Relatório compilado, auditado e enviado para o histórico de downloads!");
            if (aoSucesso) aoSucesso(); // Joga o usuário de volta pro Histórico
        }, 1500);
    };

    return (
        <form onSubmit={handleGerar} className="bg-card-primary border border-white/5 rounded-3xl p-6 shadow-2xl mt-4 max-w-3xl space-y-6">
            <div className="border-b border-main-border/10 pb-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2"><FiSliders className="text-accent"/> Motor de Relatórios Avançados</h3>
                <p className="text-xs text-secondary-text mt-1 font-medium">Configure as variáveis complexas e as regras de filtragem para compilar o arquivo de auditoria.</p>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Tipo de Relatório Estrutural</label>
                    <select value={tipoRelatorio} onChange={(e) => setTipoRelatorio(e.target.value)} className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-accent appearance-none cursor-pointer">
                        <option value="" disabled>Selecione o modelo...</option>
                        <option value="ponto">Espelho de Ponto Consolidado (MTE 671)</option>
                        <option value="extra">Auditoria de Horas Extras e Custos</option>
                        <option value="absent">Métricas de Absenteísmo e Atestados</option>
                        <option value="geo">Log de Dispositivos e Geolocalização</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Filtrar por Departamento</label>
                    <select value={setor} onChange={(e) => setSetor(e.target.value)} className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-accent appearance-none cursor-pointer">
                        <option value="all">Todos os Setores (Geral)</option>
                        <option value="tech">Tecnologia & Desenvolvimento</option>
                        <option value="rh">Recursos Humanos</option>
                        <option value="fin">Financeiro & Compliance</option>
                    </select>
                </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Data Início</label>
                    <input type="date" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-accent" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Data Término</label>
                    <input type="date" value={dataFim} onChange={(e) => setDataFim(e.target.value)} className="w-full h-12 bg-[#01011a] border border-main-border/50 rounded-xl px-4 text-xs text-white focus:outline-none focus:border-accent" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-secondary-text pl-1">Formato de Saída</label>
                    <div className="flex bg-[#01011a] border border-main-border/50 rounded-xl p-1 h-12">
                        {['pdf', 'xlsx', 'csv'].map((f) => (
                            <button type="button" key={f} onClick={() => setFormato(f)} className={`flex-1 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${formato === f ? 'bg-accent text-white shadow' : 'text-secondary-text'}`}>{f}</button>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-[#01011a] border border-main-border/20 rounded-2xl p-5 space-y-3">
                <span className="text-[9px] font-black uppercase tracking-widest text-secondary-text block mb-1">Mapeamento de Escopos Adicionais</span>
                
                <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none">
                    <input type="checkbox" checked={incluirHorasExtras} onChange={(e) => setIncluirHorasExtras(e.target.checked)} className="w-4 h-4 rounded border-main-border bg-[#090928] text-accent focus:ring-0 cursor-pointer" />
                    <span>Calcular e discriminar banco de horas e horas extras agregadas</span>
                </label>

                <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none">
                    <input type="checkbox" checked={incluirGeolocalizacao} onChange={(e) => setIncluirGeolocalizacao(e.target.checked)} className="w-4 h-4 rounded border-main-border bg-[#090928] text-accent focus:ring-0 cursor-pointer" />
                    <span>Anexar mapas de calor de geolocalização e IPs dos registros do App Mobile</span>
                </label>

                <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none">
                    <input type="checkbox" checked={incluirAtestados} onChange={(e) => setIncluirAtestados(e.target.checked)} className="w-4 h-4 rounded border-main-border bg-[#090928] text-accent focus:ring-0 cursor-pointer" />
                    <span>Consolidar afastamentos, férias vigentes e atestados médicos (CIDs)</span>
                </label>

                <label className="flex items-center gap-3 text-xs text-slate-300 font-medium cursor-pointer select-none">
                    <input type="checkbox" checked={anonimizarDados} onChange={(e) => setAnonimizarDados(e.target.checked)} className="w-4 h-4 rounded border-main-border bg-[#090928] text-accent focus:ring-0 cursor-pointer" />
                    <span className="text-indigo-400">Aplicar Máscara de Anonimização da LGPD (Segurança Jurídica)</span>
                </label>
            </div>


            <button type="submit" disabled={processando} className="w-full h-12 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(32,48,190,0.15)]">
                {processando ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                    <>Compilar e Gerar Relatório Fiscal <FiCheckSquare size={14}/></>
                )}
            </button>
        </form>
    );
};

export default GeneratorTab;