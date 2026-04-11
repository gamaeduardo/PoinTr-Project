import React from "react";

const ChartWrapper = ({title, children, className = ''}) => {

    return (
        <div className={` bg-linear-to-t from-[#06062285] to-[#0606228a] flex flex-col shadow-sm p-6 rounded-lg ${className}`}>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">
                {title}
            </h3>

            <div className="relative grow">
                {children}
            </div>
        </div>
    )
};

export default ChartWrapper;