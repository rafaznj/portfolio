import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LuCheck, LuCopy } from "react-icons/lu";
import { email, iconButton } from "../../constants";
import { BsMailbox, BsMailboxFlag } from "react-icons/bs";

export function CopyEmail() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
  }

  return (
    <div className="flex items-center gap-3">
      {copied ? (
        <BsMailboxFlag aria-hidden="true" className="size-5 shrink-0" />
      ) : (
        <BsMailbox aria-hidden="true" className="size-5 shrink-0" />
      )}

      <span>{email}</span>
      <button type="button" onClick={copy} className={iconButton}>
        {copied ? (
          <LuCheck aria-hidden="true" className="size-5" />
        ) : (
          <LuCopy aria-hidden="true" className="size-5" />
        )}
      </button>
      <span
        role="status"
        className={
          copied ? "text-sm text-zinc-500 dark:text-zinc-400" : "sr-only"
        }
      >
        {copied ? t("hero.contact.copyEmail") : ""}
      </span>
    </div>
  );
}
