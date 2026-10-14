import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { NotFoundRouteComponent } from "./routes/-NotFoundRoute";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  basepath: import.meta.env.BASE_URL,
  defaultNotFoundComponent: NotFoundRouteComponent,
});

export { router };
