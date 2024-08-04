/*
  Warnings:

  - You are about to drop the column `steamProfile` on the `SteamProfile` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SteamProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "steamId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "SteamProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SteamProfile" ("createdAt", "id", "steamId", "updatedAt", "userId") SELECT "createdAt", "id", "steamId", "updatedAt", "userId" FROM "SteamProfile";
DROP TABLE "SteamProfile";
ALTER TABLE "new_SteamProfile" RENAME TO "SteamProfile";
CREATE UNIQUE INDEX "SteamProfile_userId_key" ON "SteamProfile"("userId");
CREATE UNIQUE INDEX "SteamProfile_steamId_key" ON "SteamProfile"("steamId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
