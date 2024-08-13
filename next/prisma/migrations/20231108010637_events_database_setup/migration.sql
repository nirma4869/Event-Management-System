/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "eventStatus" AS ENUM ('DRAFT', 'OPEN', 'ONGOING', 'CLOSED');

-- CreateEnum
CREATE TYPE "registrationStatus" AS ENUM ('PENDING', 'ACCEPTED');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("username");

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "eventname" TEXT NOT NULL,
    "organizerUsername" TEXT NOT NULL,
    "startTime" TIMESTAMPTZ(3) NOT NULL,
    "endTime" TIMESTAMPTZ(3) NOT NULL,
    "roomGeometry" JSONB NOT NULL,
    "description" TEXT,
    "registrationFormular" JSONB NOT NULL,
    "invitationCode" TEXT,
    "status" "eventStatus" NOT NULL DEFAULT 'DRAFT',
    "imageUrl" TEXT,
    "adress" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "contactInformation" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "id" SERIAL NOT NULL,
    "eventId" INTEGER NOT NULL,
    "capacity" INTEGER NOT NULL,
    "origin" INTEGER[],
    "publicId" TEXT NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRegistration" (
    "id" SERIAL NOT NULL,
    "tableId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,
    "mainExhibitorUsername" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "contactInformation" TEXT,
    "formularAnswers" JSONB NOT NULL,
    "status" "registrationStatus" NOT NULL DEFAULT 'PENDING',
    "submitTime" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EventRegistration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event_invitationCode_key" ON "Event"("invitationCode");

-- CreateIndex
CREATE UNIQUE INDEX "Table_eventId_publicId_key" ON "Table"("eventId", "publicId");

-- CreateIndex
CREATE UNIQUE INDEX "EventRegistration_tableId_key" ON "EventRegistration"("tableId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerUsername_fkey" FOREIGN KEY ("organizerUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_tableId_fkey" FOREIGN KEY ("tableId") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegistration" ADD CONSTRAINT "EventRegistration_mainExhibitorUsername_fkey" FOREIGN KEY ("mainExhibitorUsername") REFERENCES "User"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
