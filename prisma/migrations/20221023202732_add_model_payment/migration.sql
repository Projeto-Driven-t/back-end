-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "cardNUmber" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "validThru" VARCHAR(255) NOT NULL,
    "cvc" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "enrollmentId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_enrollmentId_key" ON "Payment"("enrollmentId");

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "Enrollment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
