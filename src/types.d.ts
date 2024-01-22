declare module "snowball" {
  export default class Stemmer {
    constructor(lang: string);
    getCurrent(): string | null;
    setCurrent(word: string): void;
    stem(): void;
  }
}
