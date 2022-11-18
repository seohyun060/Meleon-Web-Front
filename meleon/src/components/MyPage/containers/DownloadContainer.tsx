import React, { useCallback, useState } from 'react';
import Download from '../components/Download';

type Props = {};

const DownloadContainer = (props: Props) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const onItemClicked = useCallback((idx: number) => {
    setSelectedItem((prev) => (prev === idx ? -1 : idx));
  }, []);

  const onClosePlayerClicked = useCallback(() => {
    setSelectedItem(-1);
  }, []);

  return (
    <Download
      selectedItem={selectedItem}
      onItemClicked={onItemClicked}
      onClosePlayerClicked={onClosePlayerClicked}
    />
  );
};

export default DownloadContainer;
