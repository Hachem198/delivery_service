/*
  Warnings:

  - The values [APPROVED,INTRANSIT] on the enum `Delivery_state` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `delivery` ADD COLUMN `assignedCourierId` INTEGER NULL,
    MODIFY `state` ENUM('PENDING', 'ACCEPTED', 'REJECTED', 'IN_PROGRESS', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `user` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `role` ENUM('ADMIN', 'CLIENT', 'DELIVERY_PERSON') NOT NULL DEFAULT 'CLIENT';

-- CreateIndex
CREATE INDEX `Delivery_assignedCourierId_idx` ON `Delivery`(`assignedCourierId`);

-- CreateIndex
CREATE INDEX `Delivery_state_idx` ON `Delivery`(`state`);

-- CreateIndex
CREATE INDEX `User_userId_idx` ON `User`(`userId`);

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_assignedCourierId_fkey` FOREIGN KEY (`assignedCourierId`) REFERENCES `User`(`userId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `delivery` RENAME INDEX `Delivery_clientId_fkey` TO `Delivery_clientId_idx`;
