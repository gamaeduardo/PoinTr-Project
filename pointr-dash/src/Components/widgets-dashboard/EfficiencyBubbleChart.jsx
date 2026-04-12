import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiZap } from "react-icons/fi";

const EfficiencyBubbleChart = ({ className }) => {

    const options = {
        dataLabels: { enabled: false },
        fill: { opacity: 0.8 },
        xaxis: { labels: { style: { colors: '#64748b' } } },
        yaxis: { labels: { style: { colors: '#64748b' } } },
        colors: ['#6366f1']
    };

    return (
        <Widget title="Eficiência" subtitle="Horas vs Pweformance" icon={FiZap} className={className} >
            <Chart options={options} series={[{ name: 'Equipes', data: [[10, 20, 30], [40, 50, 60], [20, 30, 10]] }]} type="bubble" height={150} />
        </Widget>
    );
};

export default EfficiencyBubbleChart;