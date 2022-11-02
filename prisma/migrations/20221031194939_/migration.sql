/*
  Warnings:

  - You are about to drop the `hotelrooms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "hotelrooms" DROP CONSTRAINT "hotelrooms_hotelId_fkey";

-- DropForeignKey
ALTER TABLE "hotelrooms" DROP CONSTRAINT "hotelrooms_roomId_fkey";

-- DropForeignKey
ALTER TABLE "hotelrooms" DROP CONSTRAINT "hotelrooms_userId_fkey";

-- DropTable
DROP TABLE "hotelrooms";

-- CreateTable
CREATE TABLE "HotelRoom" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HotelRoom_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "HotelRoom_userId_roomId_key" ON "HotelRoom"("userId", "roomId");

-- AddForeignKey
ALTER TABLE "HotelRoom" ADD CONSTRAINT "HotelRoom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HotelRoom" ADD CONSTRAINT "HotelRoom_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HotelRoom" ADD CONSTRAINT "HotelRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
