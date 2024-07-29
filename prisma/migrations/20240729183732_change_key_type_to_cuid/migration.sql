/*
  Warnings:

  - The primary key for the `TourneyTeams` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TourneyPlayers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "player" TEXT NOT NULL DEFAULT '{}',
    "teamId" TEXT NOT NULL,
    CONSTRAINT "TourneyPlayers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TourneyTeams" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TourneyPlayers" ("id", "player", "teamId") SELECT "id", "player", "teamId" FROM "TourneyPlayers";
DROP TABLE "TourneyPlayers";
ALTER TABLE "new_TourneyPlayers" RENAME TO "TourneyPlayers";
CREATE TABLE "new_TourneyTeams" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "tourneyId" INTEGER NOT NULL,
    CONSTRAINT "TourneyTeams_tourneyId_fkey" FOREIGN KEY ("tourneyId") REFERENCES "Tourneys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TourneyTeams" ("id", "name", "tourneyId") SELECT "id", "name", "tourneyId" FROM "TourneyTeams";
DROP TABLE "TourneyTeams";
ALTER TABLE "new_TourneyTeams" RENAME TO "TourneyTeams";
CREATE UNIQUE INDEX "TourneyTeams_id_key" ON "TourneyTeams"("id");
CREATE UNIQUE INDEX "TourneyTeams_name_key" ON "TourneyTeams"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
