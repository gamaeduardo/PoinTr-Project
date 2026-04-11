import React from "react";
import Widget from "./Widget";
import { FiDollarSign } from 'react-icons/fi';

const DepartmentCostTableWidget = ({ className }) => {

    return (
        <Widget title="Custos por Setor" subtitle="Folha Estimada / Mês" icon={FiDollarSign} className={className} >
            <table className="w-full text-left mt-2">
                <tbody className="text-xs">
                    {[
                        { dept: "Engenharia", cost: "R$ 125k", trend: "up" },
                        { dept: "Design", cost: "R$ 42k", trend: "down" },
                        { dept: "RH", cost: "R$ 18k", trend: "up" },
                    ].map((item, i) => (
                        <tr key={i} className="group hover:bg-white/5 transition-colors">
                            <td className="py-3 text-gray-400">{item.dept}</td>
                            <td className="py-3 text-right text-primary-text font-bold">{item.cost}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Widget>
    );
};

export default DepartmentCostTableWidget;