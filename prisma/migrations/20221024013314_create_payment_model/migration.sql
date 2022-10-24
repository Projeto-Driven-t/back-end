/*
  Warnings:

  - You are about to drop the column `cvc` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `enrollmentId` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_enrollmentId_fkey";

-- DropIndex
DROP INDEX "Payment_enrollmentId_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "cvc",
DROP COLUMN "enrollmentId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
