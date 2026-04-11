import React from "react";
import Widget from "./Widget";
import { FiCalendar } from 'react-icons/fi';

const HolidayForecastWidget = ({ className }) => {

    return (
        <Widget title="Feriados" subtitle="Próximos 30 dias" icon={FiCalendar} className={className}>
            <div className="mt-2 text-center p-3 border border-dashed border-white/10 rounded-2xl">
                <p className="text-xs text-primary-text font-bold">21 de Abril</p>
                <p className="text-[10px] text-gray-500 uppercase">Tiradentes (Terça-feira)</p>
            </div>
        </Widget>
    );
};

export default HolidayForecastWidget;