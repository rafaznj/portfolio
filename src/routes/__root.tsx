/* eslint-disable react-refresh/only-export-components */
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Suspense } from "react";
import { NotFoundRouteComponent } from "./-NotFoundRoute";
import { Navbar } from "../components/Navbar";
import { useClickSound } from "../hooks/use-click-sound";

function RootComponent() {
  useClickSound();

  return (
    <>
      <Navbar />
      <main className="mx-auto mt-8 w-full max-w-4xl px-6 pb-16">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundRouteComponent,
});
