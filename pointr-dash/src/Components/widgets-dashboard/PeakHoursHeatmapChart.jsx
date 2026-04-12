import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiClock } from "react-icons/fi";

const PeakHoursHeatmapChart = ({ className }) => {

    const options = {
        dataLabels: { enabled: false },
        colors: ['#6366f1'],
        xaxis: { categories: ['06h', '08h', '10h', '12h', '14h', '16h', '18h'], labels: { style: { colors: '#64748b'} } }
    };

    return (
        <Widget title="Picos de Acesso" subtitle="Horários Populares" icon={FiClock} className={className} >
            <Chart options={options} series={[{ name: 'Volume', data: [10, 85, 30, 70, 40, 20, 95] }]} type="bar" height={150} />
        </Widget>
    );
};

export default PeakHoursHeatmapChart;