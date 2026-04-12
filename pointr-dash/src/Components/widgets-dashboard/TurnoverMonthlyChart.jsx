import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiUsers } from "react-icons/fi";

const TurnoverMonthlyChart = ({ className }) => {

    const options = {
        colors: ['#10b981', '#f43f5e'],
        stroke: { curve: 'smooth' },
        xaxis: { categories: ['Jan', 'Fev', 'Mar', 'Abr'], labels: { style : { colors: '#64748b'} } },
        grid: { show: false }
    };

    return (
        <Widget title="Movimentação" subtitle="Entradas e Saídas" icon={FiUsers} className={className} >
            <Chart options={options} series={[{ name: 'Admissões', data: [12, 18, 10, 15] }, { name: 'Rescisões', data: [2, 5, 3, 4] }]} type="area" height={150} />
        </Widget>
    );
};

export default TurnoverMonthlyChart;