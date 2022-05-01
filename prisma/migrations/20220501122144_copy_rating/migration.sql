/*
  Warnings:

  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `rating` INTEGER NOT NULL;
