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
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
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

const raw = readFileSync(postFile, "utf8");
if (raw.length > 16384) {
  console.error(`POST.json is ${raw.length} bytes; the gate allows at most 16384`);
  process.exit(1);
}
let post;
try {
  post = JSON.parse(raw);
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}
if (typeof post !== "object" || post === null || typeof post.url !== "string") {
  console.error('POST.json must be a JSON object with a string "url" field');
  process.exit(1);
}
if (!/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/.test(post.url) &&
    !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/i\/web\/status\/\d+$/.test(post.url)) {
  console.error(`POST.json url is not an X post address: ${post.url}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(postFile, join(outDir, "POST.json"));
console.log(`Copied POST.json (${raw.length} bytes) to ${join(outDir, "POST.json")}`);
console.log(`Post: ${post.url}`);
