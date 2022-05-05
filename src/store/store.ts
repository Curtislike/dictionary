import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import wordDefenitionReducer from './reducers/wordDefenition.reducer';

const rootReducer = combineReducers({
  wordDefenition: wordDefenitionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
