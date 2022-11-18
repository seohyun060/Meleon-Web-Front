import BuyPopupContainer from '@components/common/BuyPopup/containers/BuyPopupContainer';
import useDetectClickOut from '@hooks/useDetectClickOut';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useState } from 'react';
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

  const {
    triggerRef: popupTriggerRef,
    nodeRef: popupNodeRef,
    show: isPopupShown,
    setShow: setIsPopupShown,
  } = useDetectClickOut(false);

  const onDownloadBtnClicked = useCallback(() => {
    setIsDownShown(false);
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
  }, [__showPopup]);

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
