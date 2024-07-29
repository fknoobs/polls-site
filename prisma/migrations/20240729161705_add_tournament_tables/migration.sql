-- CreateTable
CREATE TABLE "Tourneys" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TourneyTeams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "tourneyId" INTEGER NOT NULL,
    CONSTRAINT "TourneyTeams_tourneyId_fkey" FOREIGN KEY ("tourneyId") REFERENCES "Tourneys" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TourneyPlayers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "player" TEXT NOT NULL DEFAULT '{}',
    "teamId" INTEGER NOT NULL,
    CONSTRAINT "TourneyPlayers_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "TourneyTeams" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
