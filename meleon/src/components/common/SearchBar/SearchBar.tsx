import React, { useCallback, useRef, useState } from 'react';
import { images } from 'src/assets/images';
import SearchSelectContainer from './containers/SearchSelectContainer';
import './styles/search.bar.styles.css';

type Props<T> = {
  option: T[];
  selected: T | null;
  labelSelector: (item: T) => string;
  onSelected: (item: T) => void;
  selectPlaceholder?: string;
  option2: T[];
  selected2: T | null;
  labelSelector2: (item: T) => string;
  onSelected2: (item: T) => void;
  selectPlaceholder2?: string;
  inputPlaceholder?: string;
  inputValue: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

function SearchBar<T>({
  option,
  selected,
  labelSelector,
  onSelected,
  selectPlaceholder = '중분류',
  option2,
  selected2,
  labelSelector2,
  onSelected2,
  selectPlaceholder2 = '소분류',
  inputPlaceholder = '검색어를 입력해주세요',
  inputValue,
  onChange,
  onSubmit,
}: Props<T>) {
  return (
    <div className='search-bar-root'>
      <form className='form'>
        <SearchSelectContainer
          options={option}
          selected={selected}
          labelSelector={labelSelector}
          onSelected={onSelected}
          placeholder={selectPlaceholder}
        />
        <SearchSelectContainer
          options={option2}
          selected={selected2}
          labelSelector={labelSelector2}
          onSelected={onSelected2}
          placeholder={selectPlaceholder2}
        />
        <div className='input-container'>
          <input
            className='input'
            type='text'
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={(e) => onChange(e.target.value)}
          />
          <button
            className='search-btn'
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
            }}>
            <img src={images.search_24} alt='search-button' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
