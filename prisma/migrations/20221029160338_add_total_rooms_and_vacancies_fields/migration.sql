/*
  Warnings:

  - Added the required column `totalRooms` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vacancies` to the `Hotel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hotel" ADD COLUMN     "totalRooms" INTEGER NOT NULL,
ADD COLUMN     "vacancies" INTEGER NOT NULL;
