import SearchBarContainer from '@components/common/SearchBar/containers/SearchBarContainer';
import React from 'react';

type Props = {
  searchOption1: string[];
  searchOption2: string[];
  searchSelected1: string;
  searchSelected2: string;
  searchInput: string;
  labelSelector1: (item: string) => string;
  labelSelector2: (item: string) => string;
  onSelected1: (item: string) => void;
  onSelected2: (item: string) => void;
  onSearchInputChanged: (value: string) => void;
  onSubmitBtnClicked: () => void;
};

const MusicSearch = ({
  searchOption1,
  searchOption2,
  searchSelected1,
  searchSelected2,
  searchInput,
  labelSelector1,
  labelSelector2,
  onSelected1,
  onSelected2,
  onSearchInputChanged,
  onSubmitBtnClicked,
}: Props) => {
  return (
    <section className='search-section'>
      <div className='wrapper'>
        <SearchBarContainer
          option={searchOption1}
          option2={searchOption2}
          selected={searchSelected1}
          selected2={searchSelected2}
          inputValue={searchInput}
          labelSelector={labelSelector1}
          labelSelector2={labelSelector2}
          onSelected={onSelected1}
          onSelected2={onSelected2}
          onChange={onSearchInputChanged}
          onSubmit={onSubmitBtnClicked}
        />
        <div className='tags-container'>
          {['따뜻한', '위로', '음원', '신나는'].map((item, idx) => {
            return <div className='tag' key={idx}>{`#${item}`}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default MusicSearch;
