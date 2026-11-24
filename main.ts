import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A debugging haiku, 5-7-5: printf breadcrumbs at night, and the bug lives
// exactly where the breadcrumbs stop.
const haiku = [
  "three a.m., one log:",
  "\"got here,\" \"got here,\" \"got here,\" then",
  "silence. There you are.",
].join("\n");

const limit = 200;
if ([...haiku].length > limit) throw new Error(`haiku is ${[...haiku].length} characters, limit ${limit}`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), haiku);
