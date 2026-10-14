import React from "react";

export type IconButtonVariant = "primary" | "favorite" | "action" | "filter" | "outline";
export type IconButtonSize = "xs" | "sm" | "md" | "lg";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<IconButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hover active:scale-95 shadow-sm",
  favorite:
    "bg-brand-primary text-white hover:opacity-90 active:scale-90",
  action:
    "bg-brand-primary text-white hover:bg-brand-primary-hover active:scale-95",
  filter:
    "bg-brand-badge text-brand-primary hover:bg-[#f3cbc7] active:scale-95",
  outline:
    "border-2 border-brand-primary text-brand-primary bg-transparent hover:bg-brand-subnav",
};

const sizeClasses: Record<IconButtonSize, string> = {
  xs: "w-[10px] h-[10px] text-[6px]",
  sm: "w-[13px] h-[13px] text-[8px]",
  md: "w-[24px] h-[24px] text-xs",
  lg: "w-[28px] h-[28px] text-sm",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      ariaLabel,
      className = "",
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        className={`inline-flex items-center justify-center rounded-full transition-all duration-150 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${
          variantClasses[variant]
        } ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
