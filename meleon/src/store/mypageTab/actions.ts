import { TabType } from '@typedef/mypage.types';
import { UPDATE_TAB } from './modules/actionType';

export const updateTab = (tab: TabType) => {
  return {
    type: UPDATE_TAB,
    payload: tab,
  };
};

export type MypageTabActionType = ReturnType<typeof updateTab>;
