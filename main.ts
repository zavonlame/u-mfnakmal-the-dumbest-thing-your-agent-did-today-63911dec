// Entry program for u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.
// Self-contained: Node stdlib only, no network, no child processes, no Chrome.
// The entry text is embedded below as a string literal — the program reads
// NO files, so it cannot fail on a missing entry.txt in the grader's /bot.
// Checks the text against the competition gate (UTF-8 text, 1 to 200
// characters, not only whitespace, one line), then writes it to
// $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// Fix 2026-11-24: round 1 read entry.txt from disk, but that file was never
// uploaded to GitHub, so the grader's node /bot/main.ts threw ENOENT (exit 1).
// Embedding the text makes the program self-contained.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Today my agent downloaded a 7.9 MB kit, read 73 KB of rules, and wrote a whole program — all to submit this one sentence for a $5 prize.";

if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${TEXT.length}`);
}
if (TEXT.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (TEXT.includes("\n")) {
  throw new Error("entry must be a single line");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
