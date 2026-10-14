import { useLanguageToggle } from "./hook";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageToggle();

  return (
    <button
      type="button"
      className="cursor-pointer rounded-full px-2 py-1.5 duration-200 focus-visible:ring-1 focus-visible:ring-zinc-900 active:scale-90 dark:focus-visible:ring-zinc-100"
      onClick={toggleLanguage}
    >
      <span className="block h-4 overflow-hidden text-xs font-semibold uppercase leading-4">
        <span
          className={`flex flex-col duration-300 ease-out motion-reduce:transition-none ${
            language === "pt" ? "translate-y-0" : "-translate-y-1/2"
          }`}
        >
          <span className="h-4">pt</span>
          <span className="h-4">en</span>
        </span>
      </span>
    </button>
  );
}
