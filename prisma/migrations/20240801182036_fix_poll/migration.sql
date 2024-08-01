-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Polls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "multiple" BOOLEAN NOT NULL DEFAULT true,
    "minChoices" INTEGER NOT NULL DEFAULT 4,
    "maxChoices" INTEGER NOT NULL DEFAULT 4
);
INSERT INTO "new_Polls" ("description", "id", "slug", "title") SELECT "description", "id", "slug", "title" FROM "Polls";
DROP TABLE "Polls";
ALTER TABLE "new_Polls" RENAME TO "Polls";
CREATE UNIQUE INDEX "Polls_slug_key" ON "Polls"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
