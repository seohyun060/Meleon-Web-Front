import React from 'react';
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
    </div>
  );
};

export default CDate;
