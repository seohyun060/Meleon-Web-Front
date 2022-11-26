import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import popupReducer from './popup/reducer';
import coinReducer from './coin/reducer';
import refreshReducer from './refresh/reducer';

const rootReducer = combineReducers({
  counterReducer,
  popupReducer,
  coinReducer,
  refreshReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
