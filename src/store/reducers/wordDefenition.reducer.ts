import { ActionTypes } from '../actions/wordDefinition.actions';
import { IWordDefinitionState } from '../types/types';
import { RECIEVE_WORD_DEFINITION_ERROR, RECIEVE_WORD_DEFINITION_PENDING, RECIEVE_WORD_DEFINITION_SUCCESS } from '../types/wordDefinition.types';

const initialState: IWordDefinitionState = {
  wordDefenition: [],
  isLoading: true,
  error: null,
};

const wordDefenitionReducer = (state: IWordDefinitionState = initialState, action: ActionTypes): IWordDefinitionState => {
  switch (action.type) {
    case RECIEVE_WORD_DEFINITION_PENDING:
      return {
        wordDefenition: null,
        isLoading: true,
        error: null,
      };
    case RECIEVE_WORD_DEFINITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wordDefenition: action.payload,
      };
    case RECIEVE_WORD_DEFINITION_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default wordDefenitionReducer;
