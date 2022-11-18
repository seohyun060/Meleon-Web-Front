import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { images } from 'src/assets/images';
import VideoNewSection from '../components/VideoNewSection';

const VideoNewSectionContainer = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);
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

  const onItemClicked = useCallback((idx: number) => {
    setSelectedItem((prev) => (prev === idx ? -1 : idx));
  }, []);

  const onClosePlayerClicked = useCallback(() => {
    setSelectedItem(-1);
  }, []);

  useEffect(() => {
    setPath(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <VideoNewSection
      path={path}
      previews={previews}
      selectedItem={selectedItem}
      onItemClicked={onItemClicked}
      onClosePlayerClicked={onClosePlayerClicked}
    />
  );
};

export default VideoNewSectionContainer;
