/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `TourneyTeams` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Tourneys` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `Tourneys` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TourneyTeams_name_key" ON "TourneyTeams"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tourneys_name_key" ON "Tourneys"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Tourneys_slug_key" ON "Tourneys"("slug");
