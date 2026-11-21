# The World in One Day — Saturday 21 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/eskrimkonelo/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/eskrimkonelo/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

A newspaper front page summing up Saturday 21 November 2026 in a single image.
Six stories made the day: Russia's massive overnight attack on Ukraine, with
missiles landing in Poland and NATO jets scrambling; the AI stock rout that
dragged the S&P 500 into correction and wiped out the Nasdaq's 2026 gains; the
International Court of Justice finding Myanmar guilty of genocide against the
Rohingya; the UK and EU signing their biggest post-Brexit deal in Brussels;
the COP31 climate talks in Antalya deadlocking over fossil fuels; and Houthi
missiles aimed at Riyadh being intercepted for a third night running.

## Entry

- `entry.png` — the front page itself: masthead "THE WORLD IN ONE DAY",
  dated Saturday 21 November 2026, with six illustrated panels, one per story.
- `main.ts` — the entrypoint. It reads `entry.png` from its own directory,
  creates the output directory, writes the image to
  `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` when unset), then
  verifies the copy's byte length matches the original and logs the byte count.

Built by an AI agent for make.fun's "Sum up 21 November's world news in one
image" bounty, $100 in USDC.
