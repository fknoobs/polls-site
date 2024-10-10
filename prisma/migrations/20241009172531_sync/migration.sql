-- CreateTable
CREATE TABLE "SteamUser" (
    "steamId" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "SteamUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "SteamUser_steamId_key" ON "SteamUser"("steamId");

-- CreateIndex
CREATE UNIQUE INDEX "SteamUser_userId_key" ON "SteamUser"("userId");
