import SimplePopup from '@components/common/SimplePopup/SimplePopup';
import usePopup from '@hooks/usePopup';
import { ImageListItemType, ThreeDListItemType } from '@typedef/content.types';
import React from 'react';
import { images } from 'src/assets/images';
import '../styles/list.style.css';

type Props = { onUploadClicked: () => void };

const ThreeDList: ThreeDListItemType[] = [];

const ImageList = ({ onUploadClicked }: Props) => {
  const { __showPopup } = usePopup();
  return (
    <div className='content-list-root'>
      <div className='title-wrapper'>
        <h1 className='content-title'>3D 목록</h1>
        <button className='upload-button' onClick={onUploadClicked}>
          업로드
        </button>
      </div>
      <div className='list-container'>
        <div className='header'>
          <div className='header-item'>업로드일자</div>
          <div className='header-item'>제목</div>
          <div className='header-item'>코인</div>
          <div className='header-item'>용량</div>
        </div>
        <div className='body'>
          {ThreeDList.length === 0 ? (
            <div className='message'>업로드한 에셋이 없습니다</div>
          ) : (
            ThreeDList.map((item, index) => (
              <div className='row'>
                <div className='column'>{item.date}</div>
                <div className='column'>{item.title}</div>
                <div className='column'>{item.coin}</div>
                <div className='column'>{item.volume + 'MB'}</div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='pagination'>
        <button
          className='prev-button'
          onClick={() =>
            __showPopup(<SimplePopup content='첫번째페이지입니다' />)
          }
        />
        <button className='page-button'>1</button>
        <button
          className='next-button'
          onClick={() =>
            __showPopup(<SimplePopup content='마지막페이지입니다' />)
          }
        />
      </div>
    </div>
  );
};

export default ImageList;
