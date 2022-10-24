/*
  Warnings:

  - You are about to drop the column `validThru` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `cvv` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalValue` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "validThru",
DROP COLUMN "value",
ADD COLUMN     "cvv" VARCHAR(255) NOT NULL,
ADD COLUMN     "expirationDate" VARCHAR(255) NOT NULL,
ADD COLUMN     "totalValue" VARCHAR(255) NOT NULL;
