export interface IWordDefinition extends Array<IResponseWordDefinition> {}

interface IResponseWordDefinition {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio: string;
    sourceUrl?: string;
    license?: {
      name?: string;
      url?: string;
    };
  }[];
  origin: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example: string;
      synonyms: string[];
      antonyms: string[];
    }[];
  };
  license?: {
    name?: string;
    url?: string;
  };
  sourceUrl?: string[];
}
