import { PrismaClient, Prisma } from "@prisma/client";
const db = new PrismaClient();

const getUsers = (): Prisma.UserUncheckedCreateInput[] => [
  {
    id: 1,
    email: "sa@gm.com",
    name: "Sergnio",
  },
];

const getRecipes = (): Prisma.RecipeUncheckedCreateInput[] => [
  {
    title: "Bob's Soup Recipe",
    authorId: 1,
    ingredients: {
      create: [
        {
          authorId: 1,
          ingredient: {
            create: {
              name: "Carrots",
            },
          },
        },
        {
          authorId: 1,
          ingredient: {
            create: {
              name: "Carrots",
            },
          },
        },
        {
          authorId: 1,
          ingredient: {
            create: {
              name: "Carrots",
            },
          },
        },
      ],
    },
  },
];

async function seed() {
  // users
  await Promise.all(
    getUsers().map((user) => {
      db.user.create({ data: user });
    })
  );
  // recipes and some ingredients
  await Promise.all(
    getRecipes().map((recipe) => {
      return db.recipe.create({
        data: recipe,
      });
    })
  );
}

seed();
