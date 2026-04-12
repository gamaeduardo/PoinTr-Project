import React from 'react';
import Widget from './Widget'; 
import Chart from 'react-apexcharts'; 
import { FiActivity } from 'react-icons/fi';

const WorkProgressWidget = ({ data, className }) => {
  // Toda a lógica de processamento de dados do gráfico fica AQUI
  const chartOptions = {};
  const series = [{ name: 'Progresso', data: data || [30, 40, 35, 50, 49, 60] }];

  return (
    <Widget
      title="Progresso de Trabalho" 
      subtitle="Desempenho Semanal" 
      icon={FiActivity}
      className={className}
    >
      <div className="h-full min-h-62.5">
        <Chart options={chartOptions} series={series} type="area" height="100%" />
      </div>
    </Widget>
  );
};

export default WorkProgressWidget;