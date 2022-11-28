import BuyPopupContainer from '@components/common/BuyPopup/containers/BuyPopupContainer';
import useDetectClickOut from '@hooks/useDetectClickOut';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useState } from 'react';
import { images } from 'src/assets/images';
import VideoPlayer from '../components/VideoPlayer';

type Props = {
  onClosePlayerClicked: () => void;
  index?: number;
};

export type VideoDetailType = {
  title: string;
  artist: string;
  frame_rate: number;
  codec: string;
  bit_rate: number;
  playtime: string;
  format: string;
  size: number;
  category: string[];
  video: string;
};

const videoList: VideoDetailType[] = [
  {
    title: '파도치는 바다',
    artist: 'forest_deer',
    frame_rate: 60,
    codec: 'ProRes 422 HQ',
    bit_rate: 676,
    playtime: '00:03:16',
    format: 'MOV',
    size: 642.12,
    category: ['#자연', '#바다', '#노을바다', '#파도'],
    video: images.video.video1,
  },
  {
    title: 'Splash Video',
    artist: 'meleon',
    frame_rate: 60,
    codec: 'ProRes 422 HQ',
    bit_rate: 360,
    playtime: '00:00:11',
    format: 'MOV',
    size: 12,
    category: ['#MELEON', '#SPLASH'],
    video: images.video.splash,
  },
];

const VideoPlayerContainer = ({ onClosePlayerClicked, index = 0 }: Props) => {
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
        item={videoList[index].title}
        options={[
          { name: 'HD 1280 * 720', isDisabled: false, price: 50 },
          { name: 'FHD 1920 * 1080', isDisabled: false, price: 100 },
        ]}
        href={videoList[index].video}
        name={videoList[index].video}
      />,
    );
  }, [__showPopup]);

  return (
    <VideoPlayer
      videoItem={videoList[index]}
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
