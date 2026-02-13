CREATE VIRTUAL TABLE IF NOT EXISTS post_fts USING fts5(
  title,
  selftext,
  content='Post',
  content_rowid='id',
  tokenize='porter unicode61'
);

-- Triggers to keep FTS5 in sync with Post table
CREATE TRIGGER IF NOT EXISTS post_ai AFTER INSERT ON Post BEGIN
  INSERT INTO post_fts(rowid, title, selftext)
  VALUES (new.id, new.title, new.selftext);
END;

CREATE TRIGGER IF NOT EXISTS post_ad AFTER DELETE ON Post BEGIN
  INSERT INTO post_fts(post_fts, rowid, title, selftext)
  VALUES ('delete', old.id, old.title, old.selftext);
END;

CREATE TRIGGER IF NOT EXISTS post_au AFTER UPDATE ON Post BEGIN
  INSERT INTO post_fts(post_fts, rowid, title, selftext)
  VALUES ('delete', old.id, old.title, old.selftext);
  INSERT INTO post_fts(rowid, title, selftext)
  VALUES (new.id, new.title, new.selftext);
END;
INSERT INTO post_fts(rowid, title, selftext)
  SELECT id, title, selftext FROM Post
  WHERE id NOT IN (SELECT rowid FROM post_fts);