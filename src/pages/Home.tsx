import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { LuFileText } from "react-icons/lu";
import { focus, iconButton } from "../constants";
import { CopyEmail } from "../components/CopyEmail";
import cvPT from "../../public/rafael-sena-CV-PT.pdf";
import cvEN from "../../public/rafael-sena-CV-EN.pdf";

export function HomePage() {
  const { t, i18n } = useTranslation();
  const cv = i18n.resolvedLanguage === "pt" ? cvPT : cvEN;

  return (
    <div className="mt-20 flex flex-col gap-8 text-justify font-sans text-lg leading-relaxed">
      <p>{t("hero.intro")}</p>
      <p>
        {t("hero.hobbies")}
        <Link
          to="/about"
          className="rounded text-zinc-950 underline underline-offset-4 outline-none focus-visible:ring-1 focus-visible:ring-zinc-900 dark:text-white dark:focus-visible:ring-zinc-100"
        >
          …
        </Link>
      </p>
      <div className="mt-30 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 text-left">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/rafaznj"
            target="_blank"
            rel="noopener noreferrer"
            className={iconButton}
          >
            <FaGithub aria-hidden="true" className="size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafaznj"
            target="_blank"
            rel="noopener noreferrer"
            className={iconButton}
          >
            <FaLinkedin aria-hidden="true" className="size-6" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <CopyEmail />

          <a
            href={cv}
            download="Rafael-Sena-CV.pdf"
            className={`inline-flex items-center gap-3 rounded px-4 py-2 ring-1 ring-zinc-900 transition-transform active:scale-95 dark:ring-zinc-100 ${focus}`}
          >
            <LuFileText aria-hidden="true" className="size-5" />
            {t("hero.contact.cv")}
          </a>
        </div>
      </div>
    </div>
  );
}
