import usePopup from '@hooks/usePopup';
import { BuyOptionType } from '@typedef/components/common/BuyPopup/buy.popup.types';
import React, { useCallback, useState } from 'react';
import BuyPopup from '../BuyPopup';

type Props = {
  item: string;
  options: BuyOptionType[];
};

const BuyPopupContainer = (props: Props) => {
  const { __hidePopup } = usePopup();
  const [selectedOption, setSelectedOption] = useState(0);

  const onOptionClicked = useCallback((idx: number) => {
    setSelectedOption(idx);
  }, []);

  const onDownloadClicked = useCallback(() => {}, []);

  const onCloseClicked = useCallback(() => {
    __hidePopup();
  }, [__hidePopup]);

  return (
    <BuyPopup
      {...props}
      selectedOption={selectedOption}
      onOptionClicked={onOptionClicked}
      onDownloadClicked={onDownloadClicked}
      onCloseClicked={onCloseClicked}
    />
  );
};

export default BuyPopupContainer;
