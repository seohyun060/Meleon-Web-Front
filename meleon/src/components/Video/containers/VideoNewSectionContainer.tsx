import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { images } from 'src/assets/images';
import VideoNewSection from '../components/VideoNewSection';

const imageList1 = [images.sea_img, images.splash_start];

const imageList2 = [
  images.meleon.img34,
  images.meleon.img35,
  images.meleon.img36,
  images.meleon.img37,
  images.meleon.img38,
  images.meleon.img39,
  images.meleon.img40,
  images.meleon.img41,
  images.meleon.img42,
  images.meleon.img43,
  images.meleon.img44,
  images.meleon.img45,
  images.meleon.img46,
  images.meleon.img5,
  images.meleon.img11,
  images.meleon.img16,
];

const VideoNewSectionContainer = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);
  const [previews, setPrevies] = useState(imageList1);

  const [selectedItem, setSelectedItem] = useState(-1);

  const onItemClicked = useCallback((idx: number) => {
    setSelectedItem((prev) => (prev === idx ? -1 : idx));
  }, []);

  const onClosePlayerClicked = useCallback(() => {
    setSelectedItem(-1);
  }, []);

  useEffect(() => {
    let path = location.pathname.split('/')[1];
    if (path === 'video') {
      setPrevies(imageList1);
    } else if (path === 'template') {
      setPrevies(imageList2);
    }
    setPath(path);
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
