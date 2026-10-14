import React from "react";
import Link from "next/link";

export interface FooterLinkItem {
  label: string;
  href?: string;
}

export interface FooterColumnProps {
  title: string;
  links: FooterLinkItem[];
  className?: string;
}

export const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  className = "",
}) => {
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <h4 className="font-body font-extrabold text-[8px] sm:text-[8.5px] uppercase tracking-wide text-brand-text-muted mb-1.5">
        {title}
      </h4>
      <ul className="flex flex-col gap-1 list-none p-0 m-0">
        {links.map((link, idx) => (
          <li key={idx}>
            <Link
              href={link.href || "#"}
              className="font-body font-semibold text-[7.5px] sm:text-[8px] leading-[12px] text-brand-text-muted/90 hover:text-brand-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
