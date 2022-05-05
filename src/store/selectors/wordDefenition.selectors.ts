import { IWordDefinition } from '../../types/wordDefinition.types';

export const getWordDefinitionSelectos = (state: { wordDefenition: { wordDefenition: IWordDefinition } }) => state.wordDefenition.wordDefenition;

export const getWordDefinitionLoadingSelector = (state: { wordDefenition: { isLoading: boolean } }) => state.wordDefenition.isLoading;

export const getWordDefinitionErrorSelector = (state: { wordDefenition: { error: unknown } }) => state.wordDefenition.error;
