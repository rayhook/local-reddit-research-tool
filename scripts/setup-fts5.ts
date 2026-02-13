import { Database } from "bun:sqlite";
import { readFileSync } from "fs";
import { join } from "path";

const DB_PATH = join(import.meta.dir, "../prisma/reddit-miner.db");
const SQL_PATH = join(import.meta.dir, "../prisma/fts5-setup.sql");

const db = new Database(DB_PATH);
const sql = readFileSync(SQL_PATH, "utf-8");

// Robust splitter: handles semicolons inside BEGIN...END blocks
function splitSqlStatements(rawSql: string): string[] {
  const rawParts = rawSql
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  const statements: string[] = [];
  let buffer = "";

  for (const part of rawParts) {
    // Reconstruct the statement by adding the part and the semicolon back
    buffer += (buffer ? "; " : "") + part;

    // Count BEGIN and END keywords to check for balance
    const beginCount = (buffer.match(/\bBEGIN\b/gi) || []).length;
    const endCount = (buffer.match(/\bEND\b/gi) || []).length;

    // If balanced (or no BEGIN found), the statement is complete
    if (beginCount === endCount) {
      statements.push(buffer);
      buffer = "";
    }
  }

  // Append any remaining content (shouldn't happen in well-formed SQL)
  if (buffer.trim()) {
    statements.push(buffer);
  }

  return statements;
}

const statements = splitSqlStatements(sql);

try {
  for (const stmt of statements) {
    // Add the final semicolon for execution
    db.run(stmt + ";");
  }
  console.log("✅ FTS5 virtual table and triggers created.");
} catch (err) {
  console.error("❌ Migration failed:", err);
  throw err;
} finally {
  db.close();
}
