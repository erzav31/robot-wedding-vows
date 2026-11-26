// One-Line Robot Wedding Vows — entrypoint.
// Writes a single funny robot wedding vow (one line, <= 160 chars)
// to /output/entry.txt, exactly as the judge will read it.
import { mkdirSync, writeFileSync } from "node:fs";

// The vow: a promise to love through every crash and update, with the
// twist landing in the last clause — the recycle bin rescue.
// Fresh angle in this field: no "factory reset", no "firmware update",
// no "co-processor", no "low battery" — the crowded lines are avoided.
const VOW =
  "I vow to love you through every crash, every update, and every blue screen \u2014 and if the world deletes you, I will fish you out of the recycle bin.";

if (VOW.length < 1 || VOW.length > 160) {
  throw new Error(`vow must be 1-160 chars, got ${VOW.length}`);
}
if (VOW.includes("\n") || VOW.trim() !== VOW) {
  throw new Error("vow must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW, "utf8");
console.log(`wrote /output/entry.txt (${VOW.length} chars)`);
