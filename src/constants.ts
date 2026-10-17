export const icon =
  "col-start-1 row-start-1 size-[1.1rem] transition-all will-change-transform motion-reduce:transition-none";

export const enter =
  "scale-100 opacity-100 blur-0 duration-500 delay-100 ease-[cubic-bezier(0.34,1.56,0.64,1)]";

export const exit = "scale-50 opacity-0 blur-[2px] duration-300 delay-0 ease-in";

export const name = "Rafael Sena";

export const email = "rafaelsena.contact@gmail.com";

export const navLinks = [
  { to: "/projects", key: "projects" },
  { to: "/about", key: "about" },
  { to: "/skills", key: "skills" },
] as const;

export const ring =
  "focus-visible:ring-1 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100";

export const focus =
  "outline-none focus-visible:ring-1 focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100";

export const iconButton = `grid size-10 shrink-0 cursor-pointer place-items-center rounded text-zinc-500 transition-colors hover:text-zinc-950 active:scale-90 dark:text-zinc-400 dark:hover:text-white ${focus}`;
