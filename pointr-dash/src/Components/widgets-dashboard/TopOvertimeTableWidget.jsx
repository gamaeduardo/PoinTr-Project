import React from "react";
import Widget from "./Widget";
import { FiTrendingUp } from 'react-icons/fi';

const TopOvertimeTableWidget = ({ className }) => {

    return (
        <Widget title="Ranking Horas Extras" subtitle="Top 5 da Semana" icon={FiTrendingUp} className={className} >
            <table className="w-full text-left mt-2">
                <thead className="text-[10px] text-gray-500 uppercase font-black border-b border-white/5'">
                    <tr>
                        <th className="pb-2">Colaborador</th>
                        <th className="pb-2 text-right">Horas</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {[
                        { name: "Lucas Tania", hours: "12:40" },
                        { name: "Matteo Vistocco", hours: "10:15" },
                        { name: "Aaron Kim", hours: "08:50" }
                    ].map((item, i) => (
                        <tr key={i} className="border-b border-primary-text/5 last:border-0">
                            <td className="py-3 text-primary-text font-medium">{item.name}</td>
                            <td className="py-3 text-right text-red-400 font-mono font-bold">{item.hours}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default TopOvertimeTableWidget;