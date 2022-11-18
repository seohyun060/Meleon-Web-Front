import React from 'react';
import VideoListContainer from '../containers/VideoListContainer';
import VideoSearchContainer from '../containers/VideoSearchContainer';

type Props = {
  searchParam: URLSearchParams;
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const VideoRecommendPage = ({
  searchParam,
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <div className='video-root page-root'>
      <VideoSearchContainer />
      <main className='main-section'>
        <div>
          <a className='title'>
            <span className='span'>{`${searchParam.get('q')}`}</span>
          </a>
        </div>
        <VideoListContainer
          previews={previews}
          selectedItem={selectedItem}
          onItemClicked={onItemClicked}
          onClosePlayerClicked={onClosePlayerClicked}
        />
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default VideoRecommendPage;
