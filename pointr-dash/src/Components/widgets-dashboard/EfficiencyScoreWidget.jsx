import Widget from "./Widget";
import { FiZap } from 'react-icons/fi';

const EfficiencyScoreWidget = ({ score, className }) => {
    return (
        <Widget title="Score de Eficiência" subtitle="Média Geral da Equipe" icon={FiZap} className={className}>
            <div className="flex flex-col items-center justify-center h-full space-y-3">
                <div className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-yellow-400 to-orange-600">
                    {score}%
                </div>
                <div className="flex space-x-1">
                    {[2, 3, 4, 5].map((star) => (
                        <div
                            key={star}
                            className={`w-6 h-1.5 rounded-full ${star <= (score/20) ? 'bg-yellow-500' : 'bg-white/10'}`}
                        />
                    ))}
                </div>
                <p className="text-[10px] text-gray-500 text-center px-4">
                    Sua equipe está <span className="text-primary-text font-bold">15% mais rápida</span> que o padrão do setor.
                </p>
            </div>
        </Widget>
    )
};

export default EfficiencyScoreWidget;