import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiBarChart } from 'react-icons';

const OvertimeVsRegularChart = ({ className }) => {

    const options = {
        chart: { stacked: true, toolbar: { show: false } },
        colors: ['#6366f1', '#f43f5e'],
        plotOptions: { bar: { borderRadius: 4, columnWidth: '40%' } },
        xaxis: { categories: ['S1', 'S2', 'S3', 'S4'], labels: { style : { colors: '#64748b' } } },
        grid: { borderColor: '#1e293b'}
    };

    return (
        <Widget title="Horas Mensais" subtitle="Normal vs Extra" icon={FiBarChart} className={className} >
            <Chart options={options} series={[{ name: 'Normal', data: [320, 310, 340,] }, { name: 'Extra', data: [45, 32, 58, 41] }]} type="bar" height={150} />
        </Widget>
    );
};

export default OvertimeVsRegularChart;