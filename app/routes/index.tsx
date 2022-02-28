import { Link, LoaderFunction, useLoaderData, useTransition } from "remix";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";
import getRecipes from "~/data/getRecipes";

export default () => (
  <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>Welcome OSS Recipes</h1>
  </div>
);
