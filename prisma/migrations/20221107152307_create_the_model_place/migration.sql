/*
  Warnings:

  - You are about to drop the column `dayActivitiesId` on the `Activity` table. All the data in the column will be lost.
  - Made the column `vacancies` on table `Activity` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Activity" DROP CONSTRAINT "Activity_dayActivitiesId_fkey";

-- AlterTable
ALTER TABLE "Activity" DROP COLUMN "dayActivitiesId",
ALTER COLUMN "vacancies" SET NOT NULL;

-- CreateTable
CREATE TABLE "Place" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dayActivitiesId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Place" ADD CONSTRAINT "Place_dayActivitiesId_fkey" FOREIGN KEY ("dayActivitiesId") REFERENCES "DayActivities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
