import React from 'react';
import IllustratorListContainer from '../containers/IllustratorListContainer';
import IllustratorSearchContainer from '../containers/IllustratorSearchContainer';

type Props = {
  searchParam: URLSearchParams;
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const IllustratorRecommendPage = ({
  searchParam,
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <div className='video-root page-root'>
      <IllustratorSearchContainer />
      <main className='main-section'>
        <div>
          <a className='title'>
            <span className='span'>{`${searchParam.get('q')}`}</span>
          </a>
        </div>
        <IllustratorListContainer
          previews={previews}
          selectedItem={selectedItem}
          onItemClicked={onItemClicked}
          onClosePlayerClicked={onClosePlayerClicked}
        />
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default IllustratorRecommendPage;
