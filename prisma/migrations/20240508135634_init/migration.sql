/*
  Warnings:

  - Added the required column `price` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "history" ADD COLUMN     "price" INTEGER NOT NULL;
