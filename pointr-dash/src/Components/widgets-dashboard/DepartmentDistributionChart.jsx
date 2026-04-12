import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiPieChart } from "react-icons/fi";

const DepartmentDistributionChart = ({ className }) => {

    const options = {
        labels: ['TI', 'RH', 'Vendas', 'Ope'],
        colors: ['#6366f1', '#a855f7', '#ec4899', '#f43f5e'],
        legend: { position: 'bottom', labels: { colors: '#64748b' } },
        stroke: { show: false },
        dataLabels: { enabled: false }
    };

    return (
        <Widget title="Distribuição" subtitle="Equipe por Setor" icon={FiPieChart} className={className} >
            <Chart options={options} series={[30, 15, 25, 30]} type="donut" height={200} />
        </Widget>
    );
};

export default DepartmentDistributionChart;