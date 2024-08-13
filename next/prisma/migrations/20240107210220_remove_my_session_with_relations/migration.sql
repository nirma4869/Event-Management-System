/*
  Warnings:

  - You are about to drop the `MySession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "MySession" DROP CONSTRAINT "MySession_userId_fkey";

-- DropTable
DROP TABLE "MySession";
