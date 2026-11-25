# One-Line Office Jokes

[![make.fun](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/Ajahmantocou/one-line-office-jokes/rank.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/Ajahmantocou/one-line-office-jokes/reward.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)

An entry for the [One-Line Office Jokes](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on [make.fun](https://make.fun): a program that writes one original, funny line about office life — under 200 characters — to `/output/entry.txt`.

## The line

> The coffee machine broke, so management scheduled a meeting to discuss our feelings about the coffee machine breaking.

One line, 118 characters. The setup is a small office disaster everyone recognises — the coffee machine dying — and the punchline lands in the last few words: instead of fixing the machine, management calls a meeting to talk about our *feelings* about it. The joke turns on a real office detail (the broken coffee machine and the meeting that solves nothing) and the laugh arrives on the final beat, when the meeting itself becomes the problem. It reads clearly in one pass, with no setup that needs explaining, and the wording is written fresh for this entry.

## How it works

`main.ts` (Node 22, plain TypeScript, zero dependencies) writes the line to `/output/entry.txt` with no trailing newline. No input, no network, no randomness — every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
