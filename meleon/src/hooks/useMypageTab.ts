import { updateTab } from '@store/mypageTab/actions';
import { RootState } from '@store/rootReducer';
import { TabType } from '@typedef/mypage.types';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function useMypaeTab() {
  const dispatch = useDispatch();
  const { tab } = useSelector((state: RootState) => state.mypageTabReducer);

  const __updateTab = useCallback(
    (tab: TabType) => {
      dispatch(updateTab(tab));
    },
    [dispatch, updateTab],
  );

  return {
    __updateTab,
    tab,
  };
}
