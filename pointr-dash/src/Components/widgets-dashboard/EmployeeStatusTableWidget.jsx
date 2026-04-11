import React from "react";
import Widget from "./Widget";
import { FiActivity } from 'react-icons/fi';

const EmployeeStatusTableWidget = ({ className }) => {

    return (
        <Widget title="Status da Equipe" subtitle="Visão Geral" icon={FiActivity} className={className} >
            <table className="w-full text-xs mt-2">
                <tbody className="text-xs">
                    {[
                        { status: "Em Atividade", count: 124, color: "bg-green-500" },
                        { status: "Em Intervalo", count: 12, color: "bg-orange-500" },
                        { status: "Offline", count: 4, color: "bg-gray-600" }
                    ].map((s, i) => (
                        <tr key={i} className="border-b border-white/5">
                            <td className="py-2.5 flex items-center gap-2">
                                <div className={`w-1.5 h-1.5 rounded-full ${s.color}`} />
                                <span className="text-gray-400">{s.status}</span>
                            </td>
                            <td className="py-2.5 text-right text-primary-text font-black">{s.count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default EmployeeStatusTableWidget;