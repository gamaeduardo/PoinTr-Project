import Widget from './Widget';
import { FiClock } from 'react-icons/fi';

const TotalHoursWidget = ({ totalHoras }) => (
    <Widget title="Total de Horas" icon={FiClock} className="col-span-3">
        <div className="mt-2">
            <span className="text-4xl font-bold text-white">{totalHoras}h</span>
            <p className="text-green-400 text-xs mt-1">+12% em relação ao mês anterior</p>
        </div>
    </Widget>
);

export default TotalHoursWidget;