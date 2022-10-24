-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "modalityId" INTEGER NOT NULL,
    "accommodationId" INTEGER NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_modalityId_key" ON "Ticket"("modalityId");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_accommodationId_key" ON "Ticket"("accommodationId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_modalityId_fkey" FOREIGN KEY ("modalityId") REFERENCES "Modality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_accommodationId_fkey" FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
