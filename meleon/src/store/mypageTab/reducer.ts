import { TabType } from '@typedef/mypage.types';
import { MypageTabActionType } from './actions';

type MypageTabStateType = {
  tab: TabType;
};

const initialState: MypageTabStateType = {
  tab: 'userinfo',
};

export default function reducer(
  state = initialState,
  { type, payload }: MypageTabActionType,
): MypageTabStateType {
  switch (type) {
    case 'UPDATE_TAB':
      return {
        tab: payload,
      };

    default:
      return state;
  }
}
