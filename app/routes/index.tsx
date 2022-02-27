import { Link, LoaderFunction, useLoaderData, useTransition } from "remix";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";
import getRecipes from "~/data/getRecipes";
import { singleRecipe } from "~/routes/allRoutes";

export const loader: LoaderFunction = async () => getRecipes();

export default function Index() {
  const recipes = useLoaderData<PromiseReturnType<typeof getRecipes>>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome OSS Recipes</h1>
      <ul>
        {recipes.map((r, index) => (
          <li key={`${r.title}-${index}`}>
            <Link to={singleRecipe(r.id)}>
              Name {r.title} by {r.author?.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
