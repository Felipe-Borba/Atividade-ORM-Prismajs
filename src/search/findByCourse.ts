import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      id: "d795bc8a-3c5f-4fe9-8a83-c3e37cada06c",
    },

    include: {
      modules: true,
    },
  });

  //console.log(result);
  console.log(JSON.stringify(result));
}

main();
