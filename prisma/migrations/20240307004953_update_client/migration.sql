/*
  Warnings:

  - You are about to alter the column `cpf` on the `client` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_client" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "address" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updeted_at" DATETIME NOT NULL
);
INSERT INTO "new_client" ("address", "cpf", "created_at", "id", "last_name", "name", "updeted_at") SELECT "address", "cpf", "created_at", "id", "last_name", "name", "updeted_at" FROM "client";
DROP TABLE "client";
ALTER TABLE "new_client" RENAME TO "client";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
