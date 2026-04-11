import React from "react";
import Widget from "./Widget";
import { FiEdit } from 'react-icons/fi';

const ManualAdjustTableWidget = ({ className }) => {

    return (
        <Widget title="Últimos Ajustes" subtitle="Auditoria de Ponto" icon={FiEdit} className={className} >
            <table className="w-full text-[10px] mt-2">
                <tbody className="text-[11px]">
                    {[
                        { user: "Kyllian M.", mod: "+02:00h", reason: "Esquecimento" },
                        { user: "Paul P.", mod: "-00:30h", reason: "Saída Antecipada" },
                    ].map((item, i) => (
                        <tr key={i} className="border-b border-white/5 last:border-0">
                            <td className="py-3 text-primary-text">{item.user}</td>
                            <td className="py-3 text-accent font-bold">{item.mod}</td>
                            <td className="py-3 text-right text-gray-500 italic">{item.reason}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default ManualAdjustTableWidget;