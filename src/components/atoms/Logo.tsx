import React from "react";
import Link from "next/link";

export interface LogoProps {
  /**
   * Tamaño del logotipo
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
  /**
   * Enlace al que redirige (por defecto a "/")
   */
  href?: string;
  /**
   * Clases CSS adicionales
   */
  className?: string;
  /**
   * Texto alternativo o accesible
   */
  text?: string;
}

const sizeClasses: Record<"sm" | "md" | "lg", string> = {
  sm: "text-xl md:text-2xl leading-none",
  md: "text-2xl md:text-[26px] leading-[32px]",
  lg: "text-3xl md:text-4xl leading-tight",
};

export const Logo: React.FC<LogoProps> = ({
  size = "md",
  href = "/",
  className = "",
  text = "Dakingo",
}) => {
  const content = (
    <span
      className={`font-heading font-extrabold text-brand-primary tracking-tight transition-opacity hover:opacity-95 ${sizeClasses[size]} ${className}`}
    >
      {text}
    </span>
  );

  if (href) {
    return (
      <Link href={href} aria-label={text} className="inline-flex items-center select-none">
        {content}
      </Link>
    );
  }

  return content;
};
