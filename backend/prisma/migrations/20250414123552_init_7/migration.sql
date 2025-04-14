/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[numero]` on the table `Utilisateur` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Utilisateur_email_key` ON `Utilisateur`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Utilisateur_numero_key` ON `Utilisateur`(`numero`);
