/*
  Warnings:

  - You are about to drop the column `accommodationId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `modalityId` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `accommodation` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accommodationPrice` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modality` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modalityPrice` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_accommodationId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_modalityId_fkey";

-- DropIndex
DROP INDEX "Ticket_accommodationId_key";

-- DropIndex
DROP INDEX "Ticket_modalityId_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "accommodationId",
DROP COLUMN "modalityId",
ADD COLUMN     "accommodation" TEXT NOT NULL,
ADD COLUMN     "accommodationPrice" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "modality" TEXT NOT NULL,
ADD COLUMN     "modalityPrice" DOUBLE PRECISION NOT NULL;
