import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { allRecipesRoute } from "./routes/allRoutes";
import { CSSProperties } from "react";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default () => {
  const activeStyle: CSSProperties = {
    textDecoration: "underline",
    color: "purple",
  };
  const inactiveStyle: CSSProperties = {
    textDecoration: "none",
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav>
          <ul>
            <li style={{ display: "unset", color: "unset" }}>
              <NavLink
                to={allRecipesRoute}
                style={({ isActive }) =>
                  isActive ? activeStyle : inactiveStyle
                }
              >
                All recipes
              </NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};
