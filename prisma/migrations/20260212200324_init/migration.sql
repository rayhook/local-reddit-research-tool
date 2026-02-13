-- CreateTable
CREATE TABLE "Subreddit" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastFetchedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "redditId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "selftext" TEXT NOT NULL DEFAULT '',
    "author" TEXT NOT NULL,
    "upvotes" INTEGER NOT NULL DEFAULT 0,
    "createdUtc" DATETIME NOT NULL,
    "url" TEXT NOT NULL,
    "fetchedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "subredditId" INTEGER NOT NULL,
    CONSTRAINT "Post_subredditId_fkey" FOREIGN KEY ("subredditId") REFERENCES "Subreddit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SearchQuery" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "keywords" TEXT NOT NULL,
    "subreddits" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ApiCall" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endpoint" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "count" INTEGER NOT NULL DEFAULT 1
);

-- CreateIndex
CREATE UNIQUE INDEX "Subreddit_name_key" ON "Subreddit"("name");

-- CreateIndex
CREATE INDEX "Subreddit_name_idx" ON "Subreddit"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Post_redditId_key" ON "Post"("redditId");

-- CreateIndex
CREATE INDEX "Post_subredditId_idx" ON "Post"("subredditId");

-- CreateIndex
CREATE INDEX "Post_createdUtc_idx" ON "Post"("createdUtc");

-- CreateIndex
CREATE INDEX "Post_fetchedAt_idx" ON "Post"("fetchedAt");

-- CreateIndex
CREATE INDEX "Post_redditId_idx" ON "Post"("redditId");

-- CreateIndex
CREATE INDEX "ApiCall_timestamp_idx" ON "ApiCall"("timestamp");
