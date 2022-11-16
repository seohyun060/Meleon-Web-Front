import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import popupReducer from './popup/reducer';

const rootReducer = combineReducers({ counterReducer, popupReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
