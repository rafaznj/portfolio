import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { LuArrowLeft } from "react-icons/lu";

export function NotFoundRouteComponent() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-12 text-center">
      <div className="relative mb-6 flex items-center justify-center">
        <span
          aria-hidden="true"
          className="text-8xl font-bold tracking-tighter text-muted-foreground/20 sm:text-9xl"
        >
          404
        </span>

        <img
          src="src/assets/images/character.png"
          className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 object-contain sm:h-44 sm:w-44"
        />
      </div>

      <h1 className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl">
        {t("notFound.title")}
      </h1>

      <p className="mb-8 max-w-sm text-justify text-sm leading-relaxed text-muted-foreground sm:text-base">
        {t("notFound.description")}
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <LuArrowLeft size={16} aria-hidden="true" />
        {t("notFound.backToHome")}
      </Link>
    </main>
  );
}
