/*
  Warnings:

  - Added the required column `etatColis` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpDate` to the `Demande` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `demande` ADD COLUMN `etatColis` VARCHAR(191) NOT NULL,
    ADD COLUMN `pickUpDate` DATETIME(3) NOT NULL;
