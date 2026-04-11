import React from "react";
import Widget from "./Widget";
import { FiFileText } from 'react-icons/fi';

const PendingDocumentsWidget = ({ count, className }) => {

    return (
        <Widget title="Documentos" subtitle="Pendentes de Assinatura" icon={FiFileText} className={className} >
            <div className="flex items-center justify-between mt-4">
                <div className="text-3xl font-black text-primary-text italic">${count}</div>
                <div className="text-right">
                    <p className="text-[10px] text-indigo-400 font-bold italic">Ações Urgentes</p>
                    <button className="text-[9px] text-gray-500 underline uppercase">Revisar Agora</button>
                </div>
            </div>

        </Widget>
    );
};

export default PendingDocumentsWidget;