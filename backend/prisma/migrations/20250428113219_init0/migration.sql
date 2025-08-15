-- CreateTable
CREATE TABLE `User` (
    `userId` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `number` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'CLIENT') NOT NULL DEFAULT 'CLIENT',

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_number_key`(`number`),
    PRIMARY KEY (`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Delivery` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pickUpLocation` VARCHAR(191) NOT NULL,
    `pickUpDate` DATETIME(3) NOT NULL,
    `destLocation` VARCHAR(191) NOT NULL,
    `service` VARCHAR(191) NOT NULL,
    `productType` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `clientId` INTEGER NOT NULL,
    `state` ENUM('PENDING', 'APPROVED', 'INTRANSIT', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PENDING',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User`(`userId`) ON DELETE RESTRICT ON UPDATE CASCADE;
