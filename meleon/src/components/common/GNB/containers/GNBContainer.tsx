import React from 'react';
import GNB from '../GNB';

type Props = {
  location: String;
};
const GNBContainer = ({ location }: Props) => {
  return <GNB location={location} />;
};

export default GNBContainer;
