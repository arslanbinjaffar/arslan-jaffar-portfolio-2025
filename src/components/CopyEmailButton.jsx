import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck, FaCopy } from "react-icons/fa";
import { contactConfig } from "@/config/site";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function CopyEmailButton({ className, variant = "ghost", size = "icon-sm" }) {
  const { t } = useTranslation("common");
  const { copied, copy } = useCopyToClipboard();

  return (
    <>
      <Button
        type="button"
        variant={variant}
        size={size}
        onClick={() => copy(contactConfig.email)}
        aria-label={copied ? t("copyEmail.copied") : t("copyEmail.label")}
        title={copied ? t("copyEmail.copied") : t("copyEmail.label")}
        className={cn("shrink-0", className)}
      >
        {copied ? <FaCheck className="text-accent" /> : <FaCopy />}
      </Button>
      <span className="sr-only" aria-live="polite">
        {copied ? t("copyEmail.copied") : ""}
      </span>
    </>
  );
}

export default CopyEmailButton;
