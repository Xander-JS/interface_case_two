import React from "react";

export interface StatBadgeProps {
  icon: React.ReactNode;
  label: string;
  className?: string;
}

export const StatBadge: React.FC<StatBadgeProps> = ({ icon, label, className = "" }) => {
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Círculo contenedor con borde característico #a82a32 */}
      <div className="w-[40px] h-[40px] rounded-full border-2 border-brand-primary bg-brand-menu flex items-center justify-center text-brand-primary text-base drop-shadow-xs transition-transform hover:scale-105">
        {icon}
      </div>
      {/* Texto de 2 líneas */}
      <span className="mt-1 font-body font-extrabold text-[8.5px] leading-[10px] text-brand-primary whitespace-pre-line tracking-tight">
        {label}
      </span>
    </div>
  );
};
