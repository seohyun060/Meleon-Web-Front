import BuyPopupContainer from '@components/common/BuyPopup/containers/BuyPopupContainer';
import useDetectClickOut from '@hooks/useDetectClickOut';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';

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
  const [isLiked, setIsLiked] = useState(false);

  const onLikeClicked = useCallback(() => {
    setIsLiked((prev) => !prev);
  }, []);

  const onDownloadBtnClicked = useCallback(() => {
    setIsDownShown(false);
    __showPopup(
      <BuyPopupContainer
        item={'파도치는 바다'}
        options={[
          { name: 'HD 1280 * 720', isDisabled: false, price: 50 },
          { name: 'FHD 1920 * 1080', isDisabled: false, price: 100 },
        ]}
      />,
    );
  }, [__showPopup]);

  return (
    <VideoPlayer
      onClosePlayerClicked={onClosePlayerClicked}
      downTriggerRef={downTriggerRef}
      downNodeRef={downNodeRef}
      isDownShown={isDownShown}
      isLiked={isLiked}
      onLikeClicked={onLikeClicked}
      onDownloadBtnClicked={onDownloadBtnClicked}
    />
  );
};

export default VideoPlayerContainer;
