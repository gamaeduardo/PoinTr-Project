import React from "react";
import Widget from "./Widget";
import { FiBriefcase } from 'react-icons/fi';

const ContractRenewalTableWidget = ({ className }) => {

    return (
        <Widget title="Contratos a Vencer" subtitle="Renovação de Experiência" icon={FiBriefcase} className={className} >
            <table className="w-full text-[11px] mt-2">
                <tbody>
                    {[
                        { name: "Zlatan Ibrahimovic", days: 3, action: "Crítico" },
                        { name: "Paulo Dybala", days: 12, action: "Revisar" }
                    ].map((c, i) => (
                        <tr key={i} className="border-b border-white/5">
                            <td className="py-3 text-primary-text">{c.name}</td>
                            <td className="py-3 text-gray-400">{c.days} dias rest.</td>
                            <td className={`py-3 text-right font-black uppercase text-[9px] ${c.action === 'Crítico' ? 'text-red-500 animate-pulse' : 'text-accent'}`}>{c.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default ContractRenewalTableWidget;