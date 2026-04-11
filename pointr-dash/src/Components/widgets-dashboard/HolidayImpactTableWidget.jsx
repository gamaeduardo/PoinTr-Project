import React from "react";
import Widget from "./Widget";
import { FiUmbrella } from 'react-icons/fi';

const HolidayImpactTableWidget = ({ className }) => {

    return (
        <Widget title="Próximos Feriados" subtitle="Impacto Operacional" icon={FiUmbrella} className={className} >
            <table className="w-full text-xs mt-2">
                <tbody>
                    {[
                        { date: "21 Abr", name: "Tiradentes", status: "Escala Definida" },
                        { date: "01 Mai", name: "Dia do Trab.", status: "Pendente" }
                    ].map((h, i) => (
                        <tr key={i} className="border-b border-white/5">
                            <td className="py-3 font-mono text-accent">{h.date}</td>
                            <td className="py-3 text-primary-text font-medium">{h.name}</td>
                            <td className={`py-3 text-right text-[9px] font-black uppercase ${h.status === 'Pendente' ? 'text-red-500' : 'text-gray-500'}`}>{h.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default HolidayImpactTableWidget;