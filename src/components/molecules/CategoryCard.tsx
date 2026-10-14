"use client";

import React from "react";

export interface CategoryCardProps {
  id: string;
  name: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  icon,
  isActive = false,
  onClick,
  className = "",
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex flex-col items-center justify-center w-[76px] h-[72px] sm:w-[80px] sm:h-[76px] bg-white rounded-xl shadow-card-soft border transition-all duration-200 cursor-pointer select-none hover:-translate-y-1 hover:shadow-md ${
        isActive
          ? "border-brand-primary ring-1 ring-brand-primary"
          : "border-transparent hover:border-brand-subnav-border"
      } ${className}`}
    >
      <div className="w-[28px] h-[26px] flex items-center justify-center text-brand-primary mb-1.5 transition-transform group-hover:scale-110">
        {icon || (
          <div className="w-[26px] h-[24px] border-[2.5px] border-brand-primary rounded-md flex items-center justify-center text-[10px] font-bold">
            🎂
          </div>
        )}
      </div>
      <span className="font-body font-extrabold text-[9.5px] text-brand-primary tracking-[0.3px] uppercase">
        {name}
      </span>
    </button>
  );
};
