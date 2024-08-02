-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Polls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT,
    "description" TEXT,
    "multiple" BOOLEAN NOT NULL DEFAULT true,
    "minChoices" INTEGER NOT NULL DEFAULT 4,
    "maxChoices" INTEGER NOT NULL DEFAULT 4
);
INSERT INTO "new_Polls" ("description", "id", "maxChoices", "minChoices", "multiple", "slug", "title") SELECT "description", "id", "maxChoices", "minChoices", "multiple", "slug", "title" FROM "Polls";
DROP TABLE "Polls";
ALTER TABLE "new_Polls" RENAME TO "Polls";
CREATE UNIQUE INDEX "Polls_slug_key" ON "Polls"("slug");
CREATE TABLE "new_Tourneys" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT,
    "type" INTEGER NOT NULL DEFAULT 1,
    "description" TEXT,
    "rules" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "registrationsOpen" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL DEFAULT 'NULL',
    CONSTRAINT "Tourneys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tourneys" ("createdAt", "description", "endDate", "id", "name", "registrationsOpen", "rules", "slug", "startDate", "type", "updatedAt", "userId") SELECT "createdAt", "description", "endDate", "id", "name", "registrationsOpen", "rules", "slug", "startDate", "type", "updatedAt", "userId" FROM "Tourneys";
DROP TABLE "Tourneys";
ALTER TABLE "new_Tourneys" RENAME TO "Tourneys";
CREATE UNIQUE INDEX "Tourneys_name_key" ON "Tourneys"("name");
CREATE UNIQUE INDEX "Tourneys_slug_key" ON "Tourneys"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
