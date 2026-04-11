import React from "react";
import Widget from "./Widget";
import { FiAlertTriangle } from 'react-icons/fi';

const MissingDocsTableWidget = ({ className }) => {

    return (
        <Widget title="Docs Pendentes" subtitle="Compliance de RH" icon={FiAlertTriangle} className={className} >
            <div className="mx-h-48 overflow-y-auto scrollbar-thin pr-2">
                <table className="w-full text-left">
                    <tbody className="text-[11px]">
                        {[
                            { name: "Neymar Júnior", doc: "ASO Vencido" },
                            { name: "Zinedine Zidane", doc: "Contrato s/ Assinatura" },
                            { name: "Roberto Carlos", doc: "EPI Pendente" },
                        ].map((item, i) => (
                            <tr key={i} className="border-b border-white/5">
                                <td className="py-3 text-primary-text">{item.name}</td>
                                <td className="py-3 text-right text-orange-400 font-bold uppercase tracking-tighter">{item.doc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Widget>
    );
};

export default MissingDocsTableWidget;