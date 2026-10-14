import React from "react";

export type ButtonVariant = "primary" | "dark" | "outline" | "ghost" | "gold";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hover active:scale-[0.98] shadow-sm",
  dark:
    "bg-brand-dark text-white hover:opacity-95 active:scale-[0.98]",
  outline:
    "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
  ghost:
    "bg-transparent text-brand-primary hover:bg-brand-subnav",
  gold:
    "bg-brand-gold text-brand-dark hover:opacity-95 active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  xs: "h-[22px] px-2.5 text-[10px] font-extrabold rounded-md",
  sm: "h-[24px] px-3 text-[11px] font-extrabold rounded-xl",
  md: "h-[28px] px-4 text-xs font-extrabold rounded-xl",
  lg: "h-[36px] px-5 text-sm font-bold rounded-2xl",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "sm",
      fullWidth = false,
      className = "",
      children,
      disabled = false,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={`inline-flex items-center justify-center font-body uppercase tracking-wide transition-all duration-150 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${
          variantClasses[variant]
        } ${sizeClasses[size]} ${fullWidth ? "w-full" : ""} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
