import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import getRecipe from "~/data/getRecipe";
import { Recipe } from "@prisma/client";

export const loader: LoaderFunction = async ({ params: { recipe } }) => {
  invariant(recipe, "expected recipe in URL param");

  return getRecipe(parseInt(recipe));
};

export default () => {
  const recipe = useLoaderData<Recipe>();

  return (
    <>
      <h1>{recipe.title}</h1>
      <p>{recipe.content}</p>
    </>
  );
};
