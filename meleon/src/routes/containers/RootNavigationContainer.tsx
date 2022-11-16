import usePopup from '@hooks/usePopup';
import RootNavigation from '@routes/RootNavigation';
import React, { useCallback, useEffect, useState } from 'react';

const RootNavigationContainer = () => {
  const { popup, __hidePopup } = usePopup();

  const [translateY, setTranslateY] = useState(80);

  const onBackdropClicked = useCallback(() => {
    __hidePopup();
  }, [__hidePopup]);

  useEffect(() => {
    if (popup) {
      setTimeout(() => setTranslateY(0), 10);
    } else {
      setTranslateY(80);
    }
  }, [popup]);

  return (
    <RootNavigation
      popup={popup}
      translateY={translateY}
      onBackdropClicked={onBackdropClicked}
    />
  );
};

export default RootNavigationContainer;
