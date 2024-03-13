import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Machado de Assis",
    },
  });
  const books = ["Dom Casmurro", "Memórias Póstumas de Brás Cubas"];
  for (const book of books) {
    await prisma.books.create({
      data: {
        name: book,
        author_id: result.id,
      },
    });
  }

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
