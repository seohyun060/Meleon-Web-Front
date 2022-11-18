import React from 'react';
import { images } from 'src/assets/images';
import { cinputImages } from './assets/cinput.images';
import './styles/cinput.styles.css';

type Props = {
  inputId: string;
  value: string;
  placeholder: string;
  isVisible: boolean;
  label: string;
  containerStyle?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  onValueChanged: (value: string) => void;
  onIsVisibleChanged: () => void;
  onDeleteBtnClicked?: () => void;
  inputType?: 'password' | 'default' | 'check';
  onCheckBtnClicked?: () => void;
};

const CInput = ({
  inputId,
  value,
  placeholder,
  isVisible,
  label,
  containerStyle,
  inputStyle,
  onValueChanged,
  onIsVisibleChanged,
  onDeleteBtnClicked,
  inputType = 'default',
  onCheckBtnClicked,
}: Props) => {
  return (
    <div className='cinput-root' style={containerStyle}>
      <label className='label' htmlFor={`input-root-${inputId}`}>
        {label}
      </label>
      <div className='input-container' style={inputStyle}>
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
          <button
            type='button'
            className='input-btn delete-btn'
            onClick={onDeleteBtnClicked}>
            <img src={images.delete} />
          </button>
        )}
        {value.length > 0 && inputType === 'password' && (
          <button
            type='button'
            className='input-btn visible-btn'
            onClick={onIsVisibleChanged}>
            <img src={isVisible ? images.eye : images.eye_disable} />
          </button>
        )}
        {value.length > 0 && inputType === 'check' && (
          <button
            type='button'
            className='input-btn check-btn'
            onClick={onCheckBtnClicked}>
            <span>{'중복확인'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CInput;
