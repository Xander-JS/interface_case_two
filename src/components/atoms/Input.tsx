import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "header" | "footer" | "default";
  fullWidth?: boolean;
}

const variantClasses = {
  header:
    "h-[24px] px-3 text-[10px] bg-white border border-brand-accent rounded-xl text-brand-text placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-brand-primary",
  footer:
    "h-[27px] px-3 text-[10px] bg-white border border-[#c88a8a] rounded-xl text-brand-text placeholder-[#888] focus:outline-none focus:ring-1 focus:ring-brand-primary",
  default:
    "h-[32px] px-3 text-xs bg-white border border-gray-300 rounded-lg text-brand-text placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-brand-primary",
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", fullWidth = false, className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`font-body transition-colors ${variantClasses[variant]} ${
          fullWidth ? "w-full" : ""
        } ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
