// invariant(slug, "expected params.slug");
import prisma from "../../lib/prisma";

export default async () =>
  await prisma.recipe.findMany({
    where: { published: true },
    include: {
      author: { select: { name: true } },
    },
  });
