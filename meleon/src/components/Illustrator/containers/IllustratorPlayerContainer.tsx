import useDetectClickOut from '@hooks/useDetectClickOut';
import React, { useCallback, useState } from 'react';
import IllustratorPlayer from '../components/IllustratorPlayer';

type Props = {
  item: string;
  onClosePlayerClicked: () => void;
};

const IllustratorPlayerContainer = ({ item, onClosePlayerClicked }: Props) => {
  const {
    triggerRef: downTriggerRef,
    nodeRef: downNodeRef,
    show: isDownShown,
    setShow: setIsDownShown,
  } = useDetectClickOut(false);

  const {
    triggerRef: popupTriggerRef,
    nodeRef: popupNodeRef,
    show: isPopupShown,
    setShow: setIsPopupShown,
  } = useDetectClickOut(false);

  const onDownloadBtnClicked = useCallback(() => {
    setIsDownShown(false);
    setIsPopupShown(true);
  }, []);

  return (
    <IllustratorPlayer
      item={item}
      onClosePlayerClicked={onClosePlayerClicked}
      downTriggerRef={downTriggerRef}
      downNodeRef={downNodeRef}
      isDownShown={isDownShown}
      onDownloadBtnClicked={onDownloadBtnClicked}
    />
  );
};

export default IllustratorPlayerContainer;
