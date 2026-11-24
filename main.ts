// Entry program for u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.
// Self-contained: Node stdlib only, no network, no child processes, no Chrome.
// Reads the committed entry text, checks it against the competition gate
// (UTF-8 text, 1 to 200 characters, not only whitespace, one line), then
// writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(dir, "entry.txt"), "utf8");
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry.txt must be 1-200 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("entry.txt must not be only whitespace");
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
