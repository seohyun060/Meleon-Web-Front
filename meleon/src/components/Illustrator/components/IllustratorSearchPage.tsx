import React from 'react';
import { images } from 'src/assets/images';
import IllustratorListContainer from '../containers/IllustratorListContainer';
import IllustratorSearchContainer from '../containers/IllustratorSearchContainer';

type Props = {
  searchParam: URLSearchParams;
  previews: string[];
  selectedItem: number;
  sortType: string;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
  onSortBtnClicked: (type: string) => void;
};

const IllustratorSearchPage = ({
  searchParam,
  previews,
  selectedItem,
  sortType,
  onItemClicked,
  onClosePlayerClicked,
  onSortBtnClicked,
}: Props) => {
  return (
    <div className='video-root page-root'>
      <IllustratorSearchContainer />
      <main className='main-section'>
        <div className='section-header'>
          <span className='title'>
            <span className='span'>{`'${searchParam.get(
              'q',
            )}' 검색결과 '199'건`}</span>
          </span>
          <div className='sort-container'>
            {['최신순', '제목순'].map((item) => {
              return (
                <button
                  className={`${item === sortType ? 'active' : ''} sort`}
                  onClick={() => onSortBtnClicked(item)}>
                  {item}
                </button>
              );
            })}
          </div>
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

export default IllustratorSearchPage;
