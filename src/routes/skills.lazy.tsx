import { createLazyFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "../pages/Skills";

export const Route = createLazyFileRoute("/skills")({
  component: SkillsPage,
});
