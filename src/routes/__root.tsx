import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <TanStackRouterDevtools />
      <div className="h-64 w-64 border border-solid bg-contain bg-[url(@/assets/test.jpg)]">Hello "__root"!</div>
      <Outlet />
    </React.Fragment>
  );
}
