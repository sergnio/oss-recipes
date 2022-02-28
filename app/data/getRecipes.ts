import prisma from "../../lib/prisma";

export default async () =>
  await prisma.recipe.findMany({
    where: { published: true },
    include: {
      author: { select: { name: true } },
      ingredients: {
        select: { ingredient: { select: { name: true, id: true } } },
      },
    },
  });
