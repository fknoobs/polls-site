-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PollVotes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fingerprint" TEXT NOT NULL,
    "ipaddress" TEXT NOT NULL DEFAULT 'NULL',
    "pollId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,
    CONSTRAINT "PollVotes_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Polls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PollVotes_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "PollOptions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_PollVotes" ("fingerprint", "id", "optionId", "pollId") SELECT "fingerprint", "id", "optionId", "pollId" FROM "PollVotes";
DROP TABLE "PollVotes";
ALTER TABLE "new_PollVotes" RENAME TO "PollVotes";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
