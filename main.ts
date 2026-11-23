// One Emoji, One Smile — make.fun entry
// Writes exactly one emoji to /output/entry.txt: the single emoji most
// likely to make a stranger smile.
//
// Pure Node.js stdlib, no network, no wall clock, deterministic.
// The output directory comes from MAKEFUN_OUTPUT_DIR (default "out"),
// mirroring the harness's /output mount for local runs.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 😊 — the canonical warm, genuine smile. Instantly readable as warmth
// by a stranger glancing at a phone screen: kind, friendly, universal,
// and right coming from someone unknown. No irony, no in-joke, no
// intimacy — just a warm smile.
const EMOJI = "😊";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI + "\n", "utf8");
