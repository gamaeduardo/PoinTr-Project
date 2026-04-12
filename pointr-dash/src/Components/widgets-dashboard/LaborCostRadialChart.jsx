import React from "react";
import Widget from "./Widget";
import Chart from "react-apexcharts";
import { FiDollarSign } from "react-icons/fi";

const LaborCostRadialChart = ({ className }) => {

    const options = {
        plotOptions: {
            radialBar: {
                hollow: { size: '60%' },
                dataLabels: { name: { show: false }, value: { color: 'primary-text', fontSize: '20px', fontWeight: 'bold', offsetY: 5} }
            }
        },
        colors: ['#10b981'],
        stroke: { lineCap: 'round' }
    };

    return (
        <Widget title="Folha de Pagamento" subtitle="Consumo do Mês" icon={FiDollarSign} className={className} >
            <Chart options={options} series={[72]} type="radialBar" height={180} />
        </Widget>
    );
};

export default LaborCostRadialChart;