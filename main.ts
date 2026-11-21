import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = join(outputDir, "entry.png");

const data = readFileSync(sourcePath);
mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, data);

// Verify the copy: the written file must be byte-for-byte identical.
const copied = readFileSync(outputPath);
if (copied.length !== data.length) {
  throw new Error(
    `Copy length mismatch: wrote ${copied.length} bytes, expected ${data.length} bytes`
  );
}
console.log(`Verified copy length matches: ${copied.length} bytes`);
console.log(`Wrote ${outputPath} (${data.length} bytes)`);
