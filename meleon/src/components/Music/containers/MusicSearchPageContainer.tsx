import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MusicSearchPage from '../components/MusicSearchPage';

type Props = {};

const MusicSearchPageContainer = (props: Props) => {
  const [searchParam] = useSearchParams();

  const [selectedItem, setSelectedItem] = useState(-1);

  const [sortType, setSortType] = useState('최신순');

  const onItemClicked = useCallback((idx: number) => {
    setSelectedItem((prev) => (prev === idx ? -1 : idx));
  }, []);

  const onClosePlayerClicked = useCallback(() => {
    setSelectedItem(-1);
  }, []);

  const onSortBtnClicked = useCallback((type: string) => {
    setSortType(type);
  }, []);

  return (
    <MusicSearchPage
      searchParam={searchParam}
      sortType={sortType}
      onSortBtnClicked={onSortBtnClicked}
    />
  );
};

export default MusicSearchPageContainer;
