import React from 'react';
import cselectImages from './assets/cselect.images';
import './styles/cselect.styles.css';

type Props<T> = {
  selected: T | null;
  options: T[];
  labelSelector: (item: T) => string;
  show: boolean;
  nodeRef: React.RefObject<HTMLDivElement>;
  triggerRef: React.RefObject<HTMLDivElement>;
  onItemSelected: (item: T) => void;
};

function CSelect<T>({
  selected,
  options,
  labelSelector,
  show,
  nodeRef,
  triggerRef,
  onItemSelected,
}: Props<T>) {
  return (
    <div className={`cselect-root`}>
      <div
        ref={triggerRef}
        className={`cselect-input ${show ? 'focus' : 'unfocus'}`}>
        <span className={`cselect-label`}>
          {selected ? labelSelector(selected) : labelSelector(options[0])}
        </span>
        <div className='cselect-under-arrow'>
          <img src={cselectImages.down} alt='cselect under arrow' />
        </div>
      </div>
      {show && (
        <div ref={nodeRef} className={`cselect-option`}>
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
      )}
    </div>
  );
}

export default CSelect;
