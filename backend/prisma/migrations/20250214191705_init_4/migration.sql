/*
  Warnings:

  - The primary key for the `demande` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientid` on the `demande` table. All the data in the column will be lost.
  - You are about to drop the column `colisid` on the `demande` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `demande` table. All the data in the column will be lost.
  - The primary key for the `utilisateur` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `utilisateur` table. All the data in the column will be lost.
  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `colis` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `clientId` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idDemande` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `service` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeProduit` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUtilisateur` to the `Utilisateur` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `admin` DROP FOREIGN KEY `Admin_idAdmin_fkey`;

-- DropForeignKey
ALTER TABLE `client` DROP FOREIGN KEY `Client_idClient_fkey`;

-- DropForeignKey
ALTER TABLE `demande` DROP FOREIGN KEY `Demande_clientid_fkey`;

-- DropForeignKey
ALTER TABLE `demande` DROP FOREIGN KEY `Demande_colisid_fkey`;

-- AlterTable
ALTER TABLE `demande` DROP PRIMARY KEY,
    DROP COLUMN `clientid`,
    DROP COLUMN `colisid`,
    DROP COLUMN `id`,
    ADD COLUMN `clientId` INTEGER NOT NULL,
    ADD COLUMN `idDemande` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `service` VARCHAR(191) NOT NULL,
    ADD COLUMN `typeProduit` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`idDemande`);

-- AlterTable
ALTER TABLE `utilisateur` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `idUtilisateur` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `role` ENUM('ADMIN', 'CLIENT') NOT NULL DEFAULT 'CLIENT',
    ADD PRIMARY KEY (`idUtilisateur`);

-- DropTable
DROP TABLE `admin`;

-- DropTable
DROP TABLE `client`;

-- DropTable
DROP TABLE `colis`;

-- AddForeignKey
ALTER TABLE `Demande` ADD CONSTRAINT `Demande_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Utilisateur`(`idUtilisateur`) ON DELETE RESTRICT ON UPDATE CASCADE;
