import usePopup from '@hooks/usePopup';
import React, { useCallback } from 'react';
import BenefitPopup from '../components/BenefitPopup';

type Props = {};

const BenefitPopupContainer = (props: Props) => {
  const { __hidePopup } = usePopup();
  const onPopupClosed = useCallback(() => {
    __hidePopup();
  }, [__hidePopup]);

  return <BenefitPopup onPopupClosed={onPopupClosed} />;
};

export default BenefitPopupContainer;
