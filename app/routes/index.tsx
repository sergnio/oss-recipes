import prisma from "../../lib/prisma";
import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params: { slug } }) => {
  // invariant(slug, "expected params.slug");
  const feed = await prisma.recipe.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return feed;
  // return getPost(slug);
};

export default function Index() {
  const feed = useLoaderData<Recipe>();
  console.log({ feed });
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome OSS Recipes</h1>
      <ul>{feed}</ul>
    </div>
  );
}
