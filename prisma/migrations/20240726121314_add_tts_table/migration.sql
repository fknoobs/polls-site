-- CreateTable
CREATE TABLE "TtsAudioFiles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rewardName" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "input" TEXT NOT NULL,
    "filePath" TEXT NOT NULL
);
