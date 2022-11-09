import React, { useCallback, useState } from 'react';
import CInput from '../CInput';

type Props = {
  inputId: string;
  value: string;
  placeholder: string;
  label: string;
  onValueChanged: (value: string) => void;
  onDeleteBtnClicked: () => void;
  inputType?: 'password' | 'default' | 'check';
  onCheckBtnClicked?: () => void;
};

const CInputContainer = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onIsVisibleChanged = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return (
    <CInput
      {...props}
      isVisible={isVisible}
      onIsVisibleChanged={onIsVisibleChanged}
    />
  );
};

export default CInputContainer;
