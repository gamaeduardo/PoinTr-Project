import React from "react";

const ToolItem = ({ icon, label }) => {
    return (
        <div className="flex flex-col items-center space-y-1 p-3 bg-main-bg rounded-lg hover:bg-accent-hover transition cursor-pointer">
            <div className="p-1 rounded-md text-accent">
                {icon}
            </div>
            <span className="text-[11px] text-center text-primary-text font-semibold">{label}</span>
        </div>
    )
};

export default ToolItem;