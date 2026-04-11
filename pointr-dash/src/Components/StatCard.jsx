import React from "react";

const StatCard = ({ title, value, icon}) => {
    return (
        
        <div className="bg-linear-to-t from-[#06062285] to-[#0606228a] p-6 rounded-2xl shadow-sm h-32">
            
            <div className="flex justify-between items-start"> 
                
                <div className="flex flex-col">
                    <span className="text-sm text-gray-400">{title}</span>
                    <span className="text-4xl font-bold text-white mt-1">{value}</span>
                </div>

                {icon !== "none" ? (
                    <div className="flex justify-end mt-10">
                        <div className="p-2 transition-all duration-300 cursor-pointer rounded-2xl bg-linear-to-l from-[#0e2597] to-[#062e77] hover:from-[#0B2EE0] hover:to-[#0c398b]"><img src={icon} alt="" className="w-6 h-6 brightness-175" /></div>
                    </div>
                ) : (
                    null
                )}

            </div>
        </div>
    );
};

export default StatCard;