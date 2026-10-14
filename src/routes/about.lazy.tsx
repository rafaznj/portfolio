import { createLazyFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../pages/About";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});
