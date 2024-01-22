import Stemmer from "snowball";

import { stopwords } from "./stopwords";

const splitLines = (text: string): string[] => {
  const match = text.match(/[^\.!\?]+[\.!\?]+/g);

  if (!match) {
    return [];
  }

  return match
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
};

const splitStemmedWords = (sentence: string, stemmer: Stemmer): string[] =>
  sentence
    .split(/[\s.,!:;"'\u201d]+/)
    .map((word) => word.trim().replace(/[^\p{L}\p{N}]/g, ""))
    .filter((word) => word.length > 0 && !stopwords.has(word))
    .map((word) => {
      stemmer.setCurrent(word);
      stemmer.stem();

      return stemmer.getCurrent() ?? "";
    });

type Sentence = {
  sentence: string;
  index: number;
  score: number;
  keywords: string[];
};

const parseSentences = (text: string): Sentence[] => {
  const stemmer = new Stemmer("Finnish");

  return splitLines(text).map((sentence, index) => ({
    sentence,
    index,
    score: 0,
    keywords: splitStemmedWords(sentence, stemmer),
  }));
};

export const createSummary = (
  text: string,
  maximumSentences: number = 6,
): string => {
  const scores = new Map<string, number>();
  const parsedSentences = parseSentences(text);

  for (const sentence of parsedSentences) {
    for (const word of sentence.keywords) {
      scores.set(word, (scores.get(word) ?? 0) + 1);
    }
  }

  for (const sentence of parsedSentences) {
    for (const word of sentence.keywords) {
      sentence.score += scores.get(word) ?? 0;
    }
  }

  return parsedSentences
    .sort((a, b) => (a.score < b.score ? 1 : a.score > b.score ? -1 : 0))
    .slice(0, maximumSentences)
    .sort((a, b) => (a.index > b.index ? 1 : a.index < b.index ? -1 : 0))
    .map((sentence) => sentence.sentence)
    .join(" ");
};
