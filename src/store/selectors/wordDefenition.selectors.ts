import { IWordDefinition } from '../../types/wordDefinition.types';

export const getWordDefinitionSelector = (state: { wordDefenition: { wordDefenition: IWordDefinition } }) => state.wordDefenition.wordDefenition;

export const getWordDefinitionLoadingSelector = (state: { wordDefenition: { isLoading: boolean } }) => state.wordDefenition.isLoading;

export const getWordDefinitionErrorSelector = (state: { wordDefenition: { error: string } }) => state.wordDefenition.error;
