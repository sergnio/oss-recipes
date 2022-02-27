// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  console.log("prod");
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    console.log("creating new client");
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
  console.log("using client", prisma);
}

export default prisma;
