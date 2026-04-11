import React from "react";
import Widget from "./Widget";
import { FiEye } from 'react-icons/fi';

const AnomaliesTableWidget = ({ className }) => {

    return (
        <Widget title="Anomalias" subtitle="Padrões Suspeitos" icon={FiEye} className={className} >
            <table className="w-full text-[10px] mt-2">
                <tbody className="text-[11px]">
                    {[
                        { user: "Thomas M.", error: "Ponto Duplicado", time: "14:02" },
                        { user: "Lionel M.", error: "GPS Inconsistente", time: "08:15" }
                    ].map((e, i) => (
                        <tr key={i} className="border-b border-white/5">
                            <td className="py-3 text-primary-text">{e.user}</td>
                            <td className="py-3 text-orange-400 italic">{e.error}</td>
                            <td className="py-3 text-right text-gray-500 font-mono">{e.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default AnomaliesTableWidget;