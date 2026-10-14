"use client";

import React, { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { useI18n } from "@/src/i18n";

export interface NewsletterFormProps {
  onSubscribe?: (email: string) => void;
  className?: string;
}

export const NewsletterForm: React.FC<NewsletterFormProps> = ({
  onSubscribe,
  className = "",
}) => {
  const { t } = useI18n();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    onSubscribe?.(email);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-1.5 flex-wrap sm:flex-nowrap ${className}`}
    >
      <div className="w-full sm:w-[177px] md:w-[200px]">
        <Input
          type="email"
          required
          variant="footer"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("footer.newsletter.placeholder")}
          className="w-full text-[10px]"
          disabled={isSubscribed}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        disabled={isSubscribed}
        className="w-[82px] h-[27px] rounded-xl text-[11px] font-extrabold flex-shrink-0"
      >
        {isSubscribed ? "✓" : t("common.subscribe")}
      </Button>
    </form>
  );
};
