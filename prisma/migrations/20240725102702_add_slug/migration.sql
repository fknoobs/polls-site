/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Polls` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Polls" ADD COLUMN "slug" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Polls_slug_key" ON "Polls"("slug");
