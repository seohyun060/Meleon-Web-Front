import useCoinReducer from '@hooks/useCoinReducer';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useRef, useState } from 'react';
import Payment from '../components/Payment';
import BenefitPopupContainer from './BenefitPopupContainer';
import '../styles/payment.style.css';
import { FilterType } from '@typedef/mypage.types';

type Props = {};

const today = new Date();

const PaymentContainer = (props: Props) => {
  const { __showPopup } = usePopup();
  const { __buyCoin } = useCoinReducer();

  const [charge, setCharge] = useState(0);
  const [filter, setFilter] = useState<FilterType>({
    startDate: `${today.getFullYear()}.${
      today.getMonth() + 1
    }.${today.getDate()}`,
    endDate: `${today.getFullYear()}.${
      today.getMonth() + 1
    }.${today.getDate()}`,
    category: '전체',
    alignFilter: '최신순',
  });

  const listRef = useRef<HTMLDivElement>(null);

  const onBenefitClicked = useCallback(() => {
    __showPopup(<BenefitPopupContainer />);
  }, [__showPopup, BenefitPopupContainer]);

  const onHistoryClicked = useCallback(() => {
    window.scrollTo({ top: listRef.current?.offsetTop, behavior: 'smooth' });
  }, [listRef]);

  const onMinusClicked = useCallback(() => {
    if (charge <= 0) {
      return;
    }
    setCharge((prev) => prev - 1);
  }, []);

  const onPlusClicked = useCallback(() => {
    setCharge((prev) => prev + 1);
  }, []);

  const onChargeClicked = useCallback(() => {
    __buyCoin(charge);
    setCharge(0);
  }, [charge, __buyCoin]);

  const onFilterChange = useCallback((key: keyof FilterType, value: string) => {
    setFilter((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return (
    <Payment
      listRef={listRef}
      charge={charge}
      filter={filter}
      onFilterChange={onFilterChange}
      onBenefitClicked={onBenefitClicked}
      onHistoryClicked={onHistoryClicked}
      onMinusClicked={onMinusClicked}
      onPlusClicked={onPlusClicked}
      onChargeClicked={onChargeClicked}
    />
  );
};

export default PaymentContainer;
