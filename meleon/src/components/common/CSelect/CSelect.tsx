import React from 'react';
import cselectImages from './assets/cselect.images';
import './styles/cselect.styles.css';

type Props<T> = {
  onSelectInputClicked: () => void;
  selected: T | null;
  options: T[];
  labelSelector: (item: T) => string;
  optionVisible: boolean;
  onItemSelected: (item: T) => void;
};

function CSelect<T>({
  onSelectInputClicked,
  selected,
  options,
  labelSelector,
  optionVisible,
  onItemSelected,
}: Props<T>) {
  return (
    <div className={`cselect-root`} id={'cselect-root'}>
      <div
        className={`cselect-input ${optionVisible ? 'focus' : 'unfocus'}`}
        onClick={onSelectInputClicked}>
        <span className={`cselect-label`}>
          {selected ? labelSelector(selected) : labelSelector(options[0])}
        </span>
        <div className='cselect-under-arrow'>
          <img src={cselectImages.down} alt='cselect under arrow' />
        </div>
      </div>
      <div className={`cselect-option ${optionVisible ? 'show' : 'hide'}`}>
        {options?.map((item, index) => (
          <div
            key={index}
            className={`cselect-option-item ${
              selected === item ? 'selected' : ''
            }`}
            onClick={() => onItemSelected(item)}>
            {labelSelector(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CSelect;
