-- CreateTable
CREATE TABLE "Polls" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT
);

-- CreateTable
CREATE TABLE "PollOptions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pollId" INTEGER NOT NULL,
    CONSTRAINT "PollOptions_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Polls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PollVotes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userHash" TEXT NOT NULL,
    "pollId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,
    CONSTRAINT "PollVotes_pollId_fkey" FOREIGN KEY ("pollId") REFERENCES "Polls" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PollVotes_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "PollOptions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
