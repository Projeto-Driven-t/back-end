/*
  Warnings:

  - You are about to drop the column `cardNUmber` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `cardNumber` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "cardNUmber",
ADD COLUMN     "cardNumber" VARCHAR(255) NOT NULL;
