import { Dispatch } from 'redux';
import { IWordDefinition } from '../../types/wordDefinition.types';
import { getWordDefinition } from '../../utils/getWordDefinitionApi';
import { RECIEVE_WORD_DEFINITION_ERROR, RECIEVE_WORD_DEFINITION_PENDING, RECIEVE_WORD_DEFINITION_SUCCESS } from '../types/wordDefinition.types';

export interface RecieveWordDefinitionPendingActionType {
  type: typeof RECIEVE_WORD_DEFINITION_PENDING;
}

export interface RecieveWordDefinitionSuccessActionType {
  type: typeof RECIEVE_WORD_DEFINITION_SUCCESS;
  payload: IWordDefinition;
}

export interface RecieveWordDefinitionErrorActionType {
  type: typeof RECIEVE_WORD_DEFINITION_ERROR;
  payload: string;
}

export type ActionTypes = RecieveWordDefinitionPendingActionType | RecieveWordDefinitionSuccessActionType | RecieveWordDefinitionErrorActionType;

export function recieveWordDefinitionPending(): RecieveWordDefinitionPendingActionType {
  return {
    type: RECIEVE_WORD_DEFINITION_PENDING,
  };
}

export function recieveWordDefinitionSuccess(wordDefinition: IWordDefinition): RecieveWordDefinitionSuccessActionType {
  return {
    type: RECIEVE_WORD_DEFINITION_SUCCESS,
    payload: wordDefinition,
  };
}

export function recieveWordDefinitionError(error: string): RecieveWordDefinitionErrorActionType {
  return {
    type: RECIEVE_WORD_DEFINITION_ERROR,
    payload: error,
  };
}

export const fetchWordDefenition = (word: string, successCallback?: () => void, errorCallback?: () => void) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch(recieveWordDefinitionPending());
    try {
      const wordDefinition = await getWordDefinition(word);
      dispatch(recieveWordDefinitionSuccess(wordDefinition));
      if (successCallback && errorCallback) {
        if (Array.isArray(wordDefinition)) {
          successCallback();
        } else {
          errorCallback();
        }
      }
    } catch (error) {
      dispatch(recieveWordDefinitionError('Error...'));
    }
  };
};
