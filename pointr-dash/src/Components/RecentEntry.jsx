import React from "react";

const RecentEntry = ({ name, role, time }) => {
    return (
        <div className="flex items-center justify-between p-3 bg-blue-900/10 rounded-lg hover:bg-blue-900/50 transition">
            
            <div className="flex items-center space-x-3">
                
                <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
                    {name ? name.charAt() : 'E'}
                </div>
                
                {/* Nome e Função */}
                <div className="flex flex-col">
                    <span className="text-sm font-medium text-primary-text">{name}</span>
                    <span className="text-xs text-gray-400">{role}</span>
                </div>
            </div>

            {/* Horário */}
            <span className="text-sm font-semibold text-indigo-400">{time}</span>
        </div>
    )
};

export default RecentEntry;