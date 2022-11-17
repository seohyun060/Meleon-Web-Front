import useDetectClickOut from '@hooks/useDetectClickOut';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoBuyPopupContainer from './VideoBuyPopupContainer';

type Props = {
  onClosePlayerClicked: () => void;
};

const VideoPlayerContainer = ({ onClosePlayerClicked }: Props) => {
  const { __showPopup } = usePopup();

  const {
    triggerRef: downTriggerRef,
    nodeRef: downNodeRef,
    show: isDownShown,
    setShow: setIsDownShown,
  } = useDetectClickOut(false);

  const onDownloadBtnClicked = useCallback(() => {
    setIsDownShown(false);
    __showPopup(<VideoBuyPopupContainer />);
  }, [__showPopup]);

  return (
    <VideoPlayer
      onClosePlayerClicked={onClosePlayerClicked}
      downTriggerRef={downTriggerRef}
      downNodeRef={downNodeRef}
      isDownShown={isDownShown}
      onDownloadBtnClicked={onDownloadBtnClicked}
    />
  );
};

export default VideoPlayerContainer;
