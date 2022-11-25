import BuyPopupContainer from '@components/common/BuyPopup/containers/BuyPopupContainer';
import useDetectClickOut from '@hooks/useDetectClickOut';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import IllustratorPlayer from '../components/IllustratorPlayer';

type Props = {
  item: string;
  onClosePlayerClicked: () => void;
};

const IllustratorPlayerContainer = ({ item, onClosePlayerClicked }: Props) => {
  const { __showPopup } = usePopup();

  const {
    triggerRef: downTriggerRef,
    nodeRef: downNodeRef,
    show: isDownShown,
    setShow: setIsDownShown,
  } = useDetectClickOut(false);
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);
  const [isLiked, setIsLiked] = useState(false);

  const onLikeClicked = useCallback(() => {
    setIsLiked((prev) => !prev);
  }, []);

  const onDownloadBtnClicked = useCallback(() => {
    setIsDownShown(false);
    if (path === '3d') {
      __showPopup(
        <BuyPopupContainer
          item={'자동차 3D'}
          options={[
            { name: 'OBJ', isDisabled: false, price: 100 },
            { name: 'FBX', isDisabled: false, price: 100 },
            { name: 'MAX', isDisabled: true, price: 100 },
            { name: 'BLEND', isDisabled: true, price: 100 },
          ]}
        />,
      );
    } else {
      __showPopup(
        <BuyPopupContainer
          item={'독특한 패턴'}
          options={[
            { name: 'JPG', isDisabled: false, price: 100 },
            { name: 'PNG', isDisabled: false, price: 100 },
            { name: 'PSD', isDisabled: true, price: 100 },
            { name: 'AI', isDisabled: true, price: 100 },
          ]}
        />,
      );
    }
  }, [__showPopup]);

  useEffect(() => {
    setPath(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <IllustratorPlayer
      path={path}
      item={item}
      isLiked={isLiked}
      onLikeClicked={onLikeClicked}
      onClosePlayerClicked={onClosePlayerClicked}
      downTriggerRef={downTriggerRef}
      downNodeRef={downNodeRef}
      isDownShown={isDownShown}
      onDownloadBtnClicked={onDownloadBtnClicked}
    />
  );
};

export default IllustratorPlayerContainer;
