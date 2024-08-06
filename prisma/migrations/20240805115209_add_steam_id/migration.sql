-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TourneyPlayers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "steamId" TEXT NOT NULL DEFAULT '',
    "player" TEXT NOT NULL DEFAULT '{}',
    "teamId" TEXT NOT NULL,
    CONSTRAINT "TourneyPlayers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TourneyTeams" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_TourneyPlayers" ("id", "player", "teamId") SELECT "id", "player", "teamId" FROM "TourneyPlayers";
DROP TABLE "TourneyPlayers";
ALTER TABLE "new_TourneyPlayers" RENAME TO "TourneyPlayers";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
