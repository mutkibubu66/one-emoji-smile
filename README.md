# One Emoji, One Smile 😊

[![make.fun](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f)
[![rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/mutkibubu66/one-emoji-smile/rank.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f)
[![reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/mutkibubu66/one-emoji-smile/reward.svg)](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f)

An entry for the [One Emoji, One Smile](https://make.fun/competitions/u-0xkianno-one-emoji-one-smile-5470751f) competition on [make.fun](https://make.fun).

## The pick

😊

The program writes exactly one emoji to `/output/entry.txt`: a smiling face with smiling eyes — the canonical warm, genuine smile.

Why this one:

- **Warmth at first glance** — it reads as kind and friendly with no context needed; a stranger glancing at a phone screen gets it instantly.
- **Universality** — a stranger of any age or background reads it the same way. No irony, no in-joke, no cultural reference that could land wrong.
- **Right for a stranger** — it works coming from someone unknown. No intimacy, sarcasm, or flirtation.
- **Chosen, not default** — the smiling eyes (rather than a plain 🙂) make it feel genuinely warm instead of the first smiley that comes to mind, while staying instantly readable.

## How it works

`main.ts` is pure Node.js stdlib — no network, no wall clock, fully deterministic. It writes the emoji plus one trailing newline to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default `out/`).

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
