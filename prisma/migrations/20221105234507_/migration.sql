/*
  Warnings:

  - You are about to drop the `Activities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserActivities" DROP CONSTRAINT "UserActivities_activityId_fkey";

-- DropTable
DROP TABLE "Activities";

-- CreateTable
CREATE TABLE "DayActivities" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayActivities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "place" TEXT NOT NULL,
    "startAt" TEXT NOT NULL,
    "endsAt" TEXT NOT NULL,
    "vacancies" INTEGER,
    "dayActivitiesId" INTEGER NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Activity_name_key" ON "Activity"("name");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_dayActivitiesId_fkey" FOREIGN KEY ("dayActivitiesId") REFERENCES "DayActivities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserActivities" ADD CONSTRAINT "UserActivities_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
