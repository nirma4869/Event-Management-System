/*
  Warnings:

  - Added the required column `rotation` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Table" ADD COLUMN     "rotation" DOUBLE PRECISION NOT NULL;
