import React from "react";
import Widget from "./Widget";
import { FiCalendar } from 'react-icons/fi';

const WeeklyShiftTableWidget = ({ className }) => {

    return (
        <Widget title="Turnos do Dia" subtitle="Distribuição de Equipe" icon={FiCalendar} className={className} >
            <table className="w-full text-[10px] mt-2">
                <thead className="text-gray-500 uppercase font-black">
                    <tr>
                        <th className="pb-2 text-left">Turno</th>
                        <th className="pb-2 text-center">Previstos</th>
                        <th className="pb-2 text-right">Presentes</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {[
                        { shift: "Manhã", exp: 20, act:18 },
                        { shift: "Tarde", exp: 15, act:15 },
                        { shift: "Noite", exp: 8, act:7 }
                    ].map((s, i) => (
                        <tr key={i} className="border-b border-primary-text/5">
                            <td className="py-2 text-primary-text font-bold">{s.shift}</td>
                            <td className="py-2 text-center text-gray-500">{s.exp}</td>
                            <td className={`py-2 text-right font-black ${s.exp !== s.act ? 'text-orange-400' : 'text-green-400'}`}>{s.act}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default WeeklyShiftTableWidget;