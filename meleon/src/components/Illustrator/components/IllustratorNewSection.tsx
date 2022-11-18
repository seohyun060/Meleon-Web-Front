import React from 'react';
import { images } from 'src/assets/images';
import IllustratorListContainer from '../containers/IllustratorListContainer';

type Props = {
  path: string;
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const IllustratorNewSection = ({
  path,
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <section className='new-section'>
      <a className='title' href=''>
        <span className='span'>{`신규 ${
          path === 'picture' ? '사진' : '일러스트'
        }`}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <IllustratorListContainer
        previews={previews}
        selectedItem={selectedItem}
        onItemClicked={onItemClicked}
        onClosePlayerClicked={onClosePlayerClicked}
      />
    </section>
  );
};

export default IllustratorNewSection;
