import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "175f0f98-dfef-440b-bc0c-54ccc79d77eb",
    },
  });

  console.log(result);
}

main();
