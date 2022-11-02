/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `HotelRoom` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "HotelRoom_userId_roomId_key";

-- CreateIndex
CREATE UNIQUE INDEX "HotelRoom_userId_key" ON "HotelRoom"("userId");
