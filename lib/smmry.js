const Snowball = require('snowball');

function splitLines(text) {
  return text.match(/[^\.!\?]+[\.!\?]+/g)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 0);
}

function splitStemmedWords(sentence, stemmer) {
  return sentence.split(/[\s.,!:;"'\u201d]+/)
    .map((word) => word.trim().replace(/[^\p{L}\p{N}]/g, ''))
    .filter((word) => word.length > 0)
    .map((word) => {
      stemmer.setCurrent(word);
      stemmer.stem();

      return stemmer.getCurrent();
    });
}

function parseSentences(text) {
  const stemmer = new Snowball('Finnish');

  return splitLines(text).map((sentence, index) => {
    return {
      sentence,
      index,
      score: 0,
      keywords: splitStemmedWords(sentence, stemmer),
    };
  });
}

module.exports = function smmry(text) {
  const scores = {};
  const parsedSentences = parseSentences(text);

  parsedSentences.forEach(sentence => {
    sentence.keywords.forEach((word) => {
      scores[word] = (scores[word] || 0) + 1;
    });
  });

  parsedSentences.forEach(sentence => {
    sentence.keywords.forEach((word) => {
      sentence.score += (scores[word] || 0);
    });
  });

  return parsedSentences
    .sort((a, b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0)
    .slice(0, 6)
    .sort((a, b) => a.index > b.index ? 1 : a.index < b.index ? -1 : 0)
    .map((sentence) => sentence.sentence)
    .join(' ');
};
