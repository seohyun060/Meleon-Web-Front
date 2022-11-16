import useDetectClickOut from '@hooks/useDetectClickOut';
import React, { useCallback, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';

type Props = {
  onClosePlayerClicked: () => void;
};

const VideoPlayerContainer = ({ onClosePlayerClicked }: Props) => {
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
    <VideoPlayer
      onClosePlayerClicked={onClosePlayerClicked}
      downTriggerRef={downTriggerRef}
      downNodeRef={downNodeRef}
      isDownShown={isDownShown}
    />
  );
};

export default VideoPlayerContainer;
