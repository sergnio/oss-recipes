import { Link, LoaderFunction, Outlet, useLoaderData } from "remix";
import getRecipes from "~/data/getRecipes";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";
import { singleRecipe } from "~/routes/allRoutes";
import StyledLi from "~/components/StyledLi/StyledLi";

export const loader: LoaderFunction = async () => getRecipes();

export default () => {
  const recipes = useLoaderData<PromiseReturnType<typeof getRecipes>>();
  console.log({ recipes });

  return (
    <>
      <ul>
        {recipes.map((r, index) => (
          <StyledLi key={`${r.title}-${index}`}>
            <Link to={singleRecipe(r.id)}>
              {r.title}, by {r.author?.name}
            </Link>
          </StyledLi>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
