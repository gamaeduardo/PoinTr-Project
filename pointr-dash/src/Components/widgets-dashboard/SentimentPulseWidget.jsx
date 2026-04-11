import Widget from "./Widget";
import { FiSmile } from 'react-icons/fi';

const SentimentPulseWidget = ({ className }) => {
    const moods = [
        { emoji: '🤩', label: 'Incrível', count: 12, color: 'bg-green-500' },
        { emoji: '🙂', label: 'Bem', count: 45, color: 'bg-blue-500' },
        { emoji: '😐', label: 'Neutro', count: 8, color: 'bg-yellow-500' },
        { emoji: '😣', label: 'Estressado', count: 3, color: 'bg-red-500' },
    ];

    return (
        <Widget title="Pulso da Equipe" subtitle="Clima oorganizacional hoje" icon={FiSmile} className={className}>
            <div className="h-full flex flex-col justify-center">
                <div className="flex items-end justify-around mb-6 h-20">
                    {moods.map((m, i) => (
                        <div key={i} className="flex flex-col items-center group relative">
                            <span className="text-xl mb-2 group-hover:scale-125 transition-transform">{m.emoji}</span>
                            <div
                                className={`w-3 rounded-t-full ${m.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                                style={{ height: `${(m.count / 68) * 100}%`, minHeight: '4px' }}
                            />
                        </div>
                    ))}
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/5 text-center">
                    <p className="text-[10px] text-gray-400">Sentimento predomiante: <span className="text-blue-400 font-bold uppercase tracking-widest">Estável / Positivo</span></p>
                </div>
            </div>
        </Widget>
    )
};

export default SentimentPulseWidget;