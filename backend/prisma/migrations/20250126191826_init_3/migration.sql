/*
  Warnings:

  - You are about to drop the column `camionid` on the `demande` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `demande` table. All the data in the column will be lost.
  - You are about to drop the `camion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `colisid` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `destLocation` to the `Demande` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpLocation` to the `Demande` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `demande` DROP FOREIGN KEY `Demande_camionid_fkey`;

-- AlterTable
ALTER TABLE `demande` DROP COLUMN `camionid`,
    DROP COLUMN `location`,
    ADD COLUMN `colisid` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `destLocation` VARCHAR(191) NOT NULL,
    ADD COLUMN `pickUpLocation` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `camion`;

-- CreateTable
CREATE TABLE `Colis` (
    `idColis` INTEGER NOT NULL AUTO_INCREMENT,
    `service` VARCHAR(191) NOT NULL,
    `typeProduit` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idColis`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Demande` ADD CONSTRAINT `Demande_colisid_fkey` FOREIGN KEY (`colisid`) REFERENCES `Colis`(`idColis`) ON DELETE RESTRICT ON UPDATE CASCADE;
