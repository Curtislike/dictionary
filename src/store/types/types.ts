import { IWordDefinition } from '../../types/wordDefinition.types';

export interface IWordDefinitionState {
  wordDefenition: IWordDefinition | null;
  isLoading: boolean;
  error: string | null;
}
