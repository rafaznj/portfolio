import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { NotFoundRouteComponent } from "./-NotFoundRoute";
import { Navbar } from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 pb-16">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  ),
  notFoundComponent: NotFoundRouteComponent,
});
