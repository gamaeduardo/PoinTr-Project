import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiActivity } from "react-icons/fi";

const WeeklyActivityChart = ({ className }) => {

    const options = {
        chart: { toolbar: { show: false }, sparkline: { enabled: false } },
        stroke: { curve: 'smooth', width: 3 },
        colors: ['#6366f1'],
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0, stops: [0,90,100] } },
        xaxis: { categories: ['Seg','Ter','Qua','Qui','Sex','Sab','Dom'], labels: { style: { colors: '#64748b' } } },
        yaxis: { show: false },
        grid: { show: false }
    };

    return (
        <Widget title="Atividade Semanal" subtitle="Fluxo de Registros" icon={FiActivity} className={className} >
            <Chart options={options} series={[{ name: 'Registros', data: [45,52,38,65,48,20,15] }]} type="area" height={150} />
        </Widget>
    );
};

export default WeeklyActivityChart;