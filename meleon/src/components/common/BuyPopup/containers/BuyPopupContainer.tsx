import useCoinReducer from '@hooks/useCoinReducer';
import usePopup from '@hooks/usePopup';
import { BuyOptionType } from '@typedef/components/common/BuyPopup/buy.popup.types';
import React, { useCallback, useRef, useState } from 'react';
import { images } from 'src/assets/images';
import BuyPopup from '../BuyPopup';

type Props = {
  item: string;
  options: BuyOptionType[];
  href?: string;
  name?: string;
};

const BuyPopupContainer = ({
  item,
  options,
  href = images.preview.img1,
  name = 'download',
}: Props) => {
  const { coin, __useCoin } = useCoinReducer();
  const ref = useRef<HTMLAnchorElement>(null);

  const { __hidePopup } = usePopup();
  const [selectedOption, setSelectedOption] = useState(0);

  const onOptionClicked = useCallback((idx: number) => {
    setSelectedOption(idx);
  }, []);

  const onDownloadClicked = useCallback(() => {
    if (coin - options[selectedOption].price < 0) {
      alert('사용 가능한 코인이 부족합니다.');
      return;
    }

    __useCoin(options[selectedOption].price);

    ref.current?.click();

    __hidePopup();
  }, [ref, coin, __useCoin, selectedOption, __hidePopup]);

  const onCloseClicked = useCallback(() => {
    __hidePopup();
  }, [__hidePopup]);

  return (
    <BuyPopup
      href={href}
      name={name}
      ref={ref}
      item={item}
      options={options}
      coin={coin}
      selectedOption={selectedOption}
      onOptionClicked={onOptionClicked}
      onDownloadClicked={onDownloadClicked}
      onCloseClicked={onCloseClicked}
    />
  );
};

export default BuyPopupContainer;
