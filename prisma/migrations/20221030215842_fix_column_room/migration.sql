/*
  Warnings:

  - You are about to drop the column `totalRooms` on the `Hotel` table. All the data in the column will be lost.
  - You are about to drop the column `maxVancancies` on the `Room` table. All the data in the column will be lost.
  - Added the required column `maxVacancies` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" DROP COLUMN "totalRooms",
ALTER COLUMN "vacancies" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "maxVancancies",
ADD COLUMN     "maxVacancies" INTEGER NOT NULL;
