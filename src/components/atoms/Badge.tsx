import React from "react";

export type BadgeVariant = "offer" | "tag" | "primary" | "gold" | "soft";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  offer:
    "bg-brand-dark text-white rounded-2xl px-3 py-1 text-center shadow-sm",
  tag:
    "bg-transparent text-[#888] text-[7px] font-normal",
  primary:
    "bg-brand-primary text-white text-[9px] font-bold rounded-full px-2 py-0.5",
  gold:
    "bg-brand-gold text-brand-dark text-[9px] font-extrabold rounded-md px-1.5 py-0.5",
  soft:
    "bg-brand-badge text-brand-primary text-[10px] font-bold rounded-full px-2 py-0.5",
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "primary",
  children,
  className = "",
}) => {
  return (
    <span
      className={`inline-flex items-center justify-center font-body ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
