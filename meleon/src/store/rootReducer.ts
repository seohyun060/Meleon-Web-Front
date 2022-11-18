import { combineReducers } from 'redux';
import coinReducer from './coin/reducer';
import counterReducer from './counter/reducer';
import popupReducer from './popup/reducer';

const rootReducer = combineReducers({
  counterReducer,
  popupReducer,
  coinReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
