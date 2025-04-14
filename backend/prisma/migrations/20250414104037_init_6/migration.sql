/*
  Warnings:

  - Added the required column `confirmationMotDePass` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `utilisateur` ADD COLUMN `confirmationMotDePass` VARCHAR(191) NOT NULL;
