import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const course = await prisma.client.update({
    data: {
      address: "rua logo ali"
    },
    where: {
      id: "6e442f49-cd40-4137-b9ed-6001633a718c",
    },
  });
  console.log(course);
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
