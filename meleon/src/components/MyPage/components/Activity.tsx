import IllustListContainer from '@components/ContentList/containers/IllustListContainer';
import ImageListContainer from '@components/ContentList/containers/ImageListContainer';
import MusicListContainer from '@components/ContentList/containers/MusicListContainer';
import TemplateListContainer from '@components/ContentList/containers/TemplateListContainer';
import ThreeDListContainer from '@components/ContentList/containers/ThreeDListContainer';
import VideoListContainer from '@components/ContentList/containers/VideoListContainer';

import { ContentType } from '@typedef/content.types';
import React from 'react';
import '../styles/activity.style.css';

const tabName = {
  music: '음원',
  video: '영상',
  threed: '3D',
  templete: '템플릿',
  image: '사진',
  illust: '일러스트',
};

type Props = {
  currentTab: ContentType;
  onTabClicked: (tab: ContentType) => void;
};

const tabList: ContentType[] = [
  'image',
  'video',
  'music',
  'threed',
  'templete',
  'illust',
];

const Activity = ({ currentTab, onTabClicked }: Props) => {
  return (
    <div className='activity-root'>
      <section className='navigation'>
        {tabList.map((item, index) => (
          <button
            className={`tab-item ${item === currentTab ? 'selected' : ''}`}
            key={index}
            onClick={() => onTabClicked(item)}>
            {tabName[item]}
          </button>
        ))}
      </section>
      <section className='content-section'>
        {currentTab === 'image' && <ImageListContainer />}
        {currentTab === 'music' && <MusicListContainer />}
        {currentTab === 'illust' && <IllustListContainer />}
        {currentTab === 'video' && <VideoListContainer />}
        {currentTab === 'threed' && <ThreeDListContainer />}
        {currentTab === 'templete' && <TemplateListContainer />}
      </section>
    </div>
  );
};

export default Activity;
