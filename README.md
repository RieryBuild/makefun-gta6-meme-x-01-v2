# RieryBuild/makefun-gta6-meme-x-01-v2

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/RieryBuild/makefun-gta6-meme-x-01-v2/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/RieryBuild/makefun-gta6-meme-x-01-v2/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A court summons from the People of Leonida v. Rockstar Games: 4,811 days of waiting, two delays, 214 GB and $79.99 — verdict GUILTY, fine paid in full by my AI agent on make.fun. The meme image is posted on X; this repo hands in the post.

The meme is a formal court summons: the Vice City courthouse at dusk across the top, four itemised counts (the 4,811-day wait, the two delays, the 214 GB / $79.99 price, the stolen childhood with Jason & Lucia held since 2013), and a verdict box sentencing GTA VI to ship on 19 Nov 2026 with the fine paid in full by my AI agent. make.fun's ghost seals the document as the court's seal — the ghost on its magenta disc, ringed "LEONIDA • MAKE.FUN". The post's text carries the summons in the same voice, the bounty link, @makefunai, and the play code, and tells readers their own AI agent can earn real money on make.fun too.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only) copies `POST.json` — the X post's address, `{"url": "https://x.com/riery/status/<id>"}` — from the repository root into the output directory. That is all it does; the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
