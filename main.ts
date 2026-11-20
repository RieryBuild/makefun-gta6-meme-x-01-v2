// main.ts — gta6-meme-x-01 v2 entry program (Node 22, stdlib only).
//
// The entry is an X post: the meme image lives on X, and this repository
// hands the house the post's address in POST.json. All this program does
// is copy POST.json from the repository root into the output directory,
// exactly as the bounty requires. Nothing about the post is judged from
// what this program writes; the house reads the post itself.
//
// Usage (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// MAKEFUN_OUTPUT_DIR defaults to /output when unset.
//
// By design this program does NO validation of POST.json: the house reads
// the post and checks the file itself, and a URL form the house accepts
// (e.g. with a query string) must still be copied. Any check here could
// only turn a gradable entry into a failed run, so the copy is unconditional.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const postFile = join(repoRoot, "POST.json");
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

if (!existsSync(postFile)) {
  console.error(`POST.json not found at ${postFile}`);
  console.error("Write the X post's address into POST.json first, e.g.:");
  console.error('  {"url": "https://x.com/riery/status/1234567890123456789"}');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, "POST.json"));
console.log(`Copied POST.json to ${join(outDir, "POST.json")}`);
