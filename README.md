# smmry-fi

[![github][github-image]][github-url]
[![coveralls][coveralls-image]][coveralls-url]
[![npm][npm-image]][npm-url]

[github-image]: https://github.com/RauliL/smmry-fi/actions/workflows/test.yml/badge.svg
[github-url]: https://github.com/RauliL/smmry-fi/actions/workflows/test.yml
[coveralls-image]: https://coveralls.io/repos/github/RauliL/smmry-fi/badge.svg
[coveralls-url]: https://coveralls.io/github/RauliL/smmry-fi
[npm-image]: https://img.shields.io/npm/v/smmry-fi
[npm-url]: https://www.npmjs.com/package/smmry-fi

Creates TL;DR type summaries from text written in Finnish.

[Online demo](https://rauli.dev/smmry-fi/)

## How it works

1. The input text is split into sentences.
2. From each sentence common stopwords are removed and the remaining words are
   being stemmed into their most basic form and counted for "score".
3. Sentences with highest score count are returned from the original text.

## Installation

```shell
$ npm install smmry-fi
```

## Usage

```TypeScript
import { createSummary } from "smmry-fi";

const summary = createSummary(longTextToCreateSummaryFrom);
```
