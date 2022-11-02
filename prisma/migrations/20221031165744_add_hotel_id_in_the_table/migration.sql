/*
  Warnings:

  - You are about to drop the `HotelRoom` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HotelRoom" DROP CONSTRAINT "HotelRoom_roomId_fkey";

-- DropForeignKey
ALTER TABLE "HotelRoom" DROP CONSTRAINT "HotelRoom_userId_fkey";

-- DropTable
DROP TABLE "HotelRoom";

-- CreateTable
CREATE TABLE "hotelrooms" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "hotelId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hotelrooms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hotelrooms" ADD CONSTRAINT "hotelrooms_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotelrooms" ADD CONSTRAINT "hotelrooms_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "hotelrooms" ADD CONSTRAINT "hotelrooms_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
