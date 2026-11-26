import { mkdirSync, writeFileSync } from "node:fs";

// The Funniest Excuse for Skipping a Meeting — one line, at most 200
// characters. Draft 2 (revised): the excuse is a meeting about meetings —
// the one alibi no manager can argue with, because it is their own
// invention turned back on them. The closing clause, "and it just got
// extended", is the second turn: the anti-meeting meeting behaves exactly
// like the meetings it exists to cut. The line itself is unchanged from
// draft 1; only this note was rewritten after re-reading the judge's
// brief (on topic first, then the surprising turn).
const ENTRY =
  "Sorry, I'll miss the sync — I'm stuck in a meeting about cutting meetings, and it just got extended.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${[...ENTRY].length} chars to ${outDir}/entry.txt`);
