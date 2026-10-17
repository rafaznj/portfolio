import termoCloneDark from "../../assets/images/projects/dark-theme/termo-clone.gif";
import termoCloneLight from "../../assets/images/projects/light-theme/termo-clone.gif";
import ticksyDark from "../../assets/images/projects/dark-theme/ticksy.gif";
import ticksyLight from "../../assets/images/projects/light-theme/ticksy.gif";

export const projects = [
  {
    id: "ticksy",
    lightImage: ticksyLight,
    darkImage: ticksyDark,
    stack: [
      "React",
      "Tailwindcss",
      "TypeScript",
      "TanStack Router",
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
    ],
    demoUrl: "https://ticksy.rafaelsena.dev",
    repoUrl: "https://github.com/rafaznj/ticksy",
  },
  {
    id: "termo-clone",
    lightImage: termoCloneLight,
    darkImage: termoCloneDark,
    stack: ["React", "JavaScript", "Tailwindcss"],
    demoUrl: "https://termo-clone.rafaelsena.dev",
    repoUrl: "https://github.com/rafaznj/termo-clone",
  },
] as const;

export const stackDotFallback = "bg-zinc-400 dark:bg-zinc-500";

export const stackDots: Record<string, string> = {
  React: "bg-sky-500",
  TypeScript: "bg-blue-600",
  NestJS: "bg-red-600",
  PostgreSQL: "bg-indigo-500",
  Tailwindcss: "bg-teal-500",
  "TanStack Router": "bg-amber-500",
  "Drizzle ORM": "bg-lime-400",
  JavaScript: "bg-yellow-500",
  "Node.js": "bg-green-600",
};
