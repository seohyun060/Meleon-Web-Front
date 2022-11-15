import useDetectClickOut from '@hooks/useDetectClickOut';
import React, { useCallback, useEffect, useRef } from 'react';
import { images } from 'src/assets/images';
import '../styles/search.select.styles.css';

type Props<T> = {
  selected: T | null;
  options: T[];
  labelSelector: (item: T) => string;
  show: boolean;
  nodeRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLDivElement>;
  onItemSelected: (item: T) => void;
  placeholder?: string;
};

function SearchSelect<T>({
  selected,
  options,
  labelSelector,
  show,
  nodeRef,
  triggerRef,
  onItemSelected,
  placeholder,
}: Props<T>) {
  return (
    <div className={`search-select-root`} id={'search-select-root'}>
      <div
        ref={triggerRef}
        className={`search-select-input ${show ? 'focus' : 'unfocus'}`}>
        <span className={`search-select-label`}>
          {selected ? labelSelector(selected) : placeholder}
        </span>
        <div className='search-select-under-arrow'>
          <img
            src={show ? images.dropdown_blue : images.dropdown_black}
            alt='search-select under arrow'
          />
        </div>
      </div>
      {show && (
        <div ref={nodeRef} className={`search-select-option `}>
          {options?.map((item, index) => (
            <div
              key={index}
              className={`search-select-option-item ${
                selected === item ? 'selected' : ''
              }`}
              onClick={() => onItemSelected(item)}>
              {labelSelector(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchSelect;
