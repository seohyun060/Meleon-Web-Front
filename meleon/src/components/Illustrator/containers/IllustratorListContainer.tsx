import React from 'react';
import IllustratorList from '../components/IllustratorList';

type Props = {
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const IllustratorListContainer = (props: Props) => {
  return <IllustratorList {...props} />;
};

export default IllustratorListContainer;
