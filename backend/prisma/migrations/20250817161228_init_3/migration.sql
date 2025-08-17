/*
  Warnings:

  - You are about to drop the column `pickUpDate` on the `delivery` table. All the data in the column will be lost.
  - Added the required column `pickUpDateAndTime` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `delivery` DROP COLUMN `pickUpDate`,
    ADD COLUMN `pickUpDateAndTime` DATETIME(3) NOT NULL;
