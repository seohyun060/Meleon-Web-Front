import React from 'react';
import Footer from '../Footer';

type Props = {
  location: String;
};
const FooterContainer = ({ location }: Props) => {
  return <Footer location={location} />;
};

export default FooterContainer;
