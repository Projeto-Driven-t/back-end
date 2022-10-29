-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,
    "maxVancancies" INTEGER NOT NULL,
    "availableVacancies" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_hotelId_key" ON "Room"("hotelId");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "Hotel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
