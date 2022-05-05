import { BASE_URL } from '../constants/wordApi';
import { IWordDefinition } from '../types/wordDefinition.types';

export const getWordDefinition = async (word: string): Promise<IWordDefinition> => {
  const responseData = await fetch(BASE_URL + word);
  const data = await responseData.json();
  return data;
};
