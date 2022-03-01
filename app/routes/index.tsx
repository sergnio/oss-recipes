import { Link, LoaderFunction, useLoaderData, useTransition } from "remix";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";
import getRecipes from "~/data/getRecipes";
import brainStyled from "~/styles/brain.css";

export const links = () => {
  return [{ rel: "stylesheet", href: brainStyled }];
};
export default () => (
  <div className="container rootContainer" style={{ lineHeight: "1.4" }}>
    {/*<h1>Welcome OSS Recipes</h1>*/}
    <h1>Log in</h1>
    {/*Eina, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial*/}
    <div className="flex container">
      <input className="rounded" placeholder="Email" />
      <input className="rounded" placeholder="Password" />
    </div>
    <p>
      Forgot password? <a className="resetBtn">Reset it</a>
    </p>
    <button className="rounded loginBtn">Log in</button>
  </div>
);
