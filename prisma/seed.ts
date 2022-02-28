import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

const getRecipes = () => [
  {
    title: "Road worker",
    content: `I never wanted to believe that my Dad was stealing from his job as a road worker. But when I got home, all the signs were there.`,
    published: true,
    authorId: 1,
  },
  {
    title: "Frisbee",
    content: `I was wondering why the frisbee was getting bigger, then it hit me.`,
    published: true,
    authorId: 1,
  },
  {
    title: "Trees",
    content: `Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.`,
    published: true,
    authorId: 1,
  },
  {
    title: "Skeletons",
    content: `Why don't skeletons ride roller coasters? They don't have the stomach for it.`,
    published: true,
    authorId: 1,
  },
  {
    title: "Hippos",
    content: `Why don't you find hippopotamuses hiding in trees? They're really good at it.`,
    published: true,
    authorId: 1,
  },
  {
    title: "Dinner",
    content: `What did one plate say to the other plate? Dinner is on me!`,
    published: true,
    authorId: 1,
  },
  {
    title: "Elevator",
    content: `My first time using an elevator was an uplifting experience. The second time let me down.`,
    published: true,
    authorId: 1,
  },
];

async function seed() {
  await Promise.all(
    getRecipes().map((recipe) => {
      return db.recipe.create({ data: recipe });
    })
  );
}

seed();
