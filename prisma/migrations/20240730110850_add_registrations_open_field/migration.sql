-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tourneys" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "registrationsOpen" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Tourneys" ("description", "id", "name", "slug", "startDate") SELECT "description", "id", "name", "slug", "startDate" FROM "Tourneys";
DROP TABLE "Tourneys";
ALTER TABLE "new_Tourneys" RENAME TO "Tourneys";
CREATE UNIQUE INDEX "Tourneys_name_key" ON "Tourneys"("name");
CREATE UNIQUE INDEX "Tourneys_slug_key" ON "Tourneys"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
