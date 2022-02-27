import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import getRecipe from "~/data/getRecipe";
import { PromiseReturnType } from "@prisma/client/scripts/default-index";

export const loader: LoaderFunction = async ({ params: { recipe } }) => {
  invariant(recipe, "expected recipe in URL param");

  return getRecipe(parseInt(recipe));
};

export default () => {
  const recipe = useLoaderData<PromiseReturnType<typeof getRecipe>>();
  console.log({ recipe });

  return (
    <>
      <h1>{recipe?.title}</h1>
    </>
  );
};
