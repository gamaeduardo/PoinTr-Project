import React from "react";
import Widget from "./Widget";
import { FiPieChart } from 'react-icons/fi';
import Chart from 'react-apexcharts';

const DepartmentSplitWidget = ({ className }) => {

    return (
        <Widget title="Alocação" subtitle="Divisão por Setor" icon={FiPieChart} className={className} >
            <div className="h-32">
                <Chart 
                    type="donut" height="100%"
                    series={[44, 55, 13, 33]}
                    options={{
                        chart: {sparkline: { enabled: true } },
                        labels: ['Design', 'Dev', 'RH', 'Admin'],
                        colors: ['#6366f1', '#a855f7', '#ec4899', '#f59e0b'],
                        stroke: { show: false },
                        legend: { show: false },
                        dataLabels: { enabled: false }
                    }}
                />
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    <span className="text-[10px] text-gray-400">Design (44h)</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    <span className="text-[10px] text-gray-400">Dev (55h)</span>
                </div>
            </div>

        </Widget>
    );
};

export default DepartmentSplitWidget;