import React from 'react';
import { cinputImages } from './assets/cinput.images';
import './styles/cinput.styles.css';

type Props = {
  inputId: string;
  value: string;
  placeholder: string;
  isVisible: boolean;
  label: string;
  onValueChanged: (value: string) => void;
  onIsVisibleChanged: () => void;
  onDeleteBtnClicked: () => void;
  inputType?: 'password' | 'default' | 'check';
  onCheckBtnClicked?: () => void;
};

const CInput = ({
  inputId,
  value,
  placeholder,
  isVisible,
  label,
  onValueChanged,
  onIsVisibleChanged,
  onDeleteBtnClicked,
  inputType = 'default',
  onCheckBtnClicked,
}: Props) => {
  return (
    <div className='cinput-root'>
      <label className='label' htmlFor={`input-root-${inputId}`}>
        {label}
      </label>
      <div className='input-container'>
        <input
          className='input'
          id={`input-root-${inputId}`}
          type={
            inputType === 'password'
              ? isVisible
                ? 'text'
                : 'password'
              : 'text'
          }
          value={value}
          onChange={(e) => onValueChanged(e.target.value)}
          placeholder={placeholder}
        />
        {value.length > 0 && inputType === 'default' && (
          <button className='input-btn delete-btn' onClick={onDeleteBtnClicked}>
            <img src={cinputImages.delete} />
          </button>
        )}
        {value.length > 0 && inputType === 'password' && (
          <button
            className='input-btn visible-btn'
            onClick={onIsVisibleChanged}>
            <img
              src={isVisible ? cinputImages.eye : cinputImages.eye_disable}
            />
          </button>
        )}
        {value.length > 0 && inputType === 'check' && (
          <button className='input-btn check-btn' onClick={onCheckBtnClicked}>
            <span>{'중복확인'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CInput;
