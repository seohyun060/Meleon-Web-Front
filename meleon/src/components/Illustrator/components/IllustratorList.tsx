import React, { Fragment } from 'react';
import IllustratorPlayerContainer from '../containers/IllustratorPlayerContainer';
import '../styles/illustrator.list.styles.css';

type Props = {
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const IllustratorList = ({
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <div className='illustrator-list-root'>
      {previews.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <div
              className='item-container'
              key={idx}
              onClick={() => onItemClicked(idx)}>
              <img className='item' src={item} alt='video-preview-image' />
            </div>
            {idx === selectedItem && (
              <IllustratorPlayerContainer
                item={previews[selectedItem]}
                onClosePlayerClicked={onClosePlayerClicked}
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};

export default IllustratorList;
