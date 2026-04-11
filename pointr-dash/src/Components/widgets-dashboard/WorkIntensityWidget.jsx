import Widget from "./Widget";
import { FiActivity } from 'react-icons/fi';
import Chart from 'react-apexcharts';

const WorkIntensityWidget = ({ className }) => {
    const chartOptions = {
        chart: { sparkline : { enabled: true }, animations: { enabled: true } },
        stroke: { curve: 'smooth', width: 3, colors: ['#6366f1']},
        fill: {
            type: 'gradient',
            gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05, stops: [20, 100] }
        },
        tooltip: { theme: 'dark' },
    };

    const series = [{ name: 'Intensidade', data: [31, 40, 28, 51, 42, 109, 100]}];

    return (
        <Widget title="Intensidade de Trabalho" subtitle="Picos de atividade/dia" icon={FiActivity} className={className}>
            <div className="h-full flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-white">Alta</span>
                    <span className="text-[10px] text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded">Tempo Real</span>
                </div>
                <div className="min-h-30">
                    <Chart options={chartOptions} series={series} type="area" height="100%" />
                </div>
            </div>
        </Widget>
    )
};

export default WorkIntensityWidget;