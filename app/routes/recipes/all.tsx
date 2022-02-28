import { Link, LoaderFunction, Outlet, useLoaderData } from "remix";
import getRecipes from "~/data/getRecipes";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";
import { singleRecipe } from "~/routes/allRoutes";

export const loader: LoaderFunction = async () => getRecipes();

export default () => {
  const recipes = useLoaderData<PromiseReturnType<typeof getRecipes>>();

  return (
    <>
      <ul>
        {recipes.map((r, index) => (
          <li key={`${r.title}-${index}`}>
            <Link to={singleRecipe(r.id)}>
              Name {r.title} by {r.author?.name}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
