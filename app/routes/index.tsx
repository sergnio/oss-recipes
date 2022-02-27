import { LoaderFunction, useLoaderData } from "remix";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";
import getRecipes from "~/data/getRecipes";

export const loader: LoaderFunction = async () => getRecipes();

export default function Index() {
  const recipes = useLoaderData<PromiseReturnType<typeof getRecipes>>();
  console.log({ recipes });
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome OSS Recipes</h1>
      <ul>
        {recipes.map((r, index) => (
          <li key={`${r.title}-${index}`}>
            Name {r.title} by {r.author?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
