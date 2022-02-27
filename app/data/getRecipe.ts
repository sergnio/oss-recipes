// invariant(slug, "expected params.slug");
import prisma from "../../lib/prisma";

export default async (id: number) =>
  await prisma.recipe.findFirst({
    where: { id },
  });
