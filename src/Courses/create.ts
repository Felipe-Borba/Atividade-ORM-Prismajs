import { PrismaClient } from "@prisma/client";
import { log } from "console";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Prisma",
      duration: 50,
      description: "Curso sobre como utilizar ORM Prisma.js",
      teacher: {
        create: {
          name: "Fulano Ciclano",
      },
      },
    },
  });

  console.log(result);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
