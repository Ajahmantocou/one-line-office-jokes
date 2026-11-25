// One-Line Office Jokes — entry for make.fun competition
// u-markk-st-one-line-office-jokes-a51f2bcc
//
// Writes a single original one-line office joke (118 characters) to
// /output/entry.txt. Deterministic: no input, no network, no randomness —
// every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The coffee machine broke, so management scheduled a meeting to discuss our feelings about the coffee machine breaking.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
