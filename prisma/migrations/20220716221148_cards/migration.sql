/*
  Warnings:

  - Added the required column `isVirtual` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "isVirtual" BOOLEAN NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
