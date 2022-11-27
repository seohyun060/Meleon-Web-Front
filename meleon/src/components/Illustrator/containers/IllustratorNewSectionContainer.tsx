import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { images } from 'src/assets/images';
import IllustratorNewSection from '../components/IllustratorNewSection';

const imageList1 = [
  images.meleon.img1,
  images.meleon.img2,
  images.meleon.img3,
  images.meleon.img4,
  images.meleon.img5,
  images.meleon.img6,
  images.meleon.img7,
  images.meleon.img8,
  images.meleon.img9,
  images.meleon.img10,
  images.meleon.img11,
  images.meleon.img12,
  images.meleon.img13,
  images.meleon.img14,
  images.meleon.img15,
  images.meleon.img16,
];

const imageList2 = [
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
];

const imageList3 = [
  images.threed.img1,
  images.threed.img2,
  images.threed.img3,
  images.threed.img4,
  images.threed.img5,
  images.threed.img6,
  images.threed.img7,
  images.threed.img8,
  images.threed.img9,
  images.threed.img10,
  images.threed.img11,
  images.threed.img12,
];

const IllustratorNewSectionContainer = () => {
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
    let path = location.pathname.split('/')[1];
    if (path === 'picture') {
      setPrevies(imageList1);
    } else if (path === 'illustrator') {
      setPrevies(imageList2);
    } else if (path === '3d') {
      setPrevies(imageList3);
    }
    setPath(path);
  }, [location]);

  return (
    <IllustratorNewSection
      path={path}
      previews={previews}
      selectedItem={selectedItem}
      onItemClicked={onItemClicked}
      onClosePlayerClicked={onClosePlayerClicked}
    />
  );
};

export default IllustratorNewSectionContainer;
