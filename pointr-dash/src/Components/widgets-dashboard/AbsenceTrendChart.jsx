import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiUserX } from "react-icons/fi";

const AbsenceTrendChart = ({ className }) => {

    const options = {
        stroke: { curve: 'stepline', width: 2 },
        colors: ['#f59e0b'],
        xaxis: { categories: ['Jan', 'Fev', 'Mar', 'Abr'], labels: { style: { colors: '#64748b' } } },
        yaxis: { labels: { style: { colors: '#64748b' } } },
        grid: { show: false }
    };

    return (
        <Widget title="Absenteísmo" subtitle="Taxa de Faltas" icon={FiUserX} className={className} >
            <Chart options={options} series= {[{ name: 'Taxa %', data: [2, 3.5, 2.1, 4.8] }]} type="line" height={150} />
        </Widget>
    );
};

export default AbsenceTrendChart;