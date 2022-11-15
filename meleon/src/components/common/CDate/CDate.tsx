import React from 'react';
import { images } from 'src/assets/images';
import './styles/cdate.styles.css';

type Props = {
  id: string;
  value: string;
  onValueChanged: (date: string) => void;
};

const CDate = ({ id, value, onValueChanged }: Props) => {
  return (
    <div className='cdate-root'>
      <input
        className='date-input'
        type='date'
        value={value}
        onChange={(e) => onValueChanged(e.target.value)}
        name={`date-input-${id}`}
        id={`date-input-${id}`}
      />
      <label className='date-label' htmlFor={`date-input-${id}`}>
        <span className='date-span'>{`${value.slice(0, 4)}.${value.slice(
          5,
          7,
        )}.${value.slice(8)}`}</span>
        <img className='date-icon' src={images.date} alt='date-icon' />
      </label>
    </div>
  );
};

export default CDate;
