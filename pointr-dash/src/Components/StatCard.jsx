import React from "react";

const StatCard = ({ title, value, icon: Icon }) => {
  return (
    <div className="flex-1 bg-card-primary border border-main-border p-6 rounded-4xl hover:border-accent/30 transition-all duration-500 group">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary-text mb-2">
            {title}
          </span>
          <span className="text-4xl font-bold text-primary-text tracking-normal">
            {value}
          </span>
        </div>

        {Icon && Icon !== "none" && (
          <div className="p-3 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
            <Icon size={20} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;