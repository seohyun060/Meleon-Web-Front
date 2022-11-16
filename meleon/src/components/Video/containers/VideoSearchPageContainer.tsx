import React, { useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { images } from 'src/assets/images';
import VideoSearchPage from '../components/VideoSearchPage';

const VideoSearchPageContainer = () => {
  const [searchParam] = useSearchParams();

  const [previews, setPrevies] = useState([
    images.preview.img1,
    images.preview.img2,
    images.preview.img3,
    images.preview.img4,
    images.preview.img5,
    images.preview.img6,
    images.preview.img7,
    images.preview.img8,
    images.preview.img9,
    images.preview.img10,
    images.preview.img11,
    images.preview.img12,
    images.preview.img13,
    images.preview.img14,
    images.preview.img15,
    images.preview.img16,
  ]);

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
    <VideoSearchPage
      searchParam={searchParam}
      previews={previews}
      selectedItem={selectedItem}
      sortType={sortType}
      onItemClicked={onItemClicked}
      onClosePlayerClicked={onClosePlayerClicked}
      onSortBtnClicked={onSortBtnClicked}
    />
  );
};

export default VideoSearchPageContainer;
