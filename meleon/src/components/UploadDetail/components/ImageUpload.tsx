import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import SearchSelectContainer from '@components/common/SearchBar/containers/SearchSelectContainer';
import { ImageUploadType } from '@typedef/content.types';
import React from 'react';
import '../styles/upload.style.css';

type Props = {
  inputObject: ImageUploadType;
  onMinusClicked: () => void;
  onPlusClicked: () => void;
  onInputChange: (key: keyof ImageUploadType, value: string) => void;
  onUploadButtonClicked: () => void;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const ImageUpload = ({
  inputObject,
  onInputChange,
  onPlusClicked,
  onMinusClicked,
  onUploadButtonClicked,
  onImageUpload,
}: Props) => {
  return (
    <div className='upload-root'>
      <div className='header'>
        <span className='title'>콘텐츠 등록</span>
        <button className='upload-button' onClick={onUploadButtonClicked}>
          업로드
        </button>
      </div>
      <section className='form-section'>
        <span className='category-text'>
          분류<strong> *</strong>
        </span>
        <div className='select-wrapper'>
          <SearchSelectContainer
            options={['음원', '영상', '템플릿', '이미지', '일러스트', '3D']}
            selected={inputObject.bigTag}
            labelSelector={(item) => item}
            onSelected={(item) => onInputChange('bigTag', item)}
          />
          <SearchSelectContainer
            options={['전체', '화려한', '감성적인', '어두운', '웅장한']}
            selected={inputObject.smallTag}
            labelSelector={(item) => item}
            onSelected={(item) => onInputChange('smallTag', item)}
          />
        </div>
        <div className='input-item'>
          <CInputContainer
            inputId={'title-id'}
            value={inputObject.title}
            placeholder={'제목을 입력해주세요'}
            label={'제목 *'}
            onValueChanged={(value) => onInputChange('title', value)}
            onDeleteBtnClicked={() => onInputChange('title', '')}
          />
        </div>
        <label className='img-upload' htmlFor='profile'>
          파일 업로드
        </label>
        <input
          type='file'
          name='profile'
          id='profile'
          accept='image/*'
          onChange={onImageUpload}
        />

        <div className='content'>
          <span className='content-text'>
            가격<strong> *</strong>
          </span>
          <div className='display'>
            <button onClick={onMinusClicked}>-</button>
            <span className='coin'>{inputObject.coin}</span>
            <button onClick={onPlusClicked}>+</button>
          </div>
        </div>
        <div className='content-container'>
          <span className='content-text'>
            콘텐츠 설명<strong> *</strong>
          </span>
          <textarea
            className='content-input'
            value={inputObject.content}
            onChange={(e) =>
              onInputChange('content', e.target.value)
            }></textarea>
        </div>
      </section>
      {/* <section className='preview-section'>

      </section> */}
    </div>
  );
};

export default ImageUpload;
