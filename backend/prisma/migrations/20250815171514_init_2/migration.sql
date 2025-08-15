/*
  Warnings:

  - You are about to drop the column `destLocation` on the `delivery` table. All the data in the column will be lost.
  - Added the required column `dropOffLocation` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `delivery` DROP COLUMN `destLocation`,
    ADD COLUMN `dropOffLocation` VARCHAR(191) NOT NULL;
