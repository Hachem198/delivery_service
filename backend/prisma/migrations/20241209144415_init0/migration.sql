-- CreateTable
CREATE TABLE `Camion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomCamion` VARCHAR(191) NOT NULL,
    `poid` VARCHAR(191) NOT NULL,
    `typeDeTransport` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Utilisateur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Client` (
    `idClient` INTEGER NOT NULL,

    UNIQUE INDEX `Client_idClient_key`(`idClient`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `idAdmin` INTEGER NOT NULL,

    UNIQUE INDEX `Admin_idAdmin_key`(`idAdmin`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Demande` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(191) NOT NULL,
    `camionid` INTEGER NOT NULL,
    `clientid` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Client` ADD CONSTRAINT `Client_idClient_fkey` FOREIGN KEY (`idClient`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_idAdmin_fkey` FOREIGN KEY (`idAdmin`) REFERENCES `Utilisateur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Demande` ADD CONSTRAINT `Demande_camionid_fkey` FOREIGN KEY (`camionid`) REFERENCES `Camion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Demande` ADD CONSTRAINT `Demande_clientid_fkey` FOREIGN KEY (`clientid`) REFERENCES `Client`(`idClient`) ON DELETE RESTRICT ON UPDATE CASCADE;
