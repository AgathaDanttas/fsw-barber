/*
  Warnings:

  - You are about to drop the column `descriptrion` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `description` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "descriptrion",
ADD COLUMN     "description" TEXT NOT NULL;
