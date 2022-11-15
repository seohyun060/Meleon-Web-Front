import React from 'react';
import CDate from '../CDate';

type Props = {
  id: string;
  value: string;
  onValueChanged: (date: string) => void;
};

const CDateContainer = (props: Props) => {
  return <CDate {...props} />;
};

export default CDateContainer;
