import React from 'react';
import './styles/main.style.scss';
import { MainTableTypes } from '@typedef/components/Main/main.types';
import { images } from 'src/assets/images';
type Props = {
  tabTable: MainTableTypes[];
  onItemClicked: (path: string) => void;
};

const Main = ({ tabTable, onItemClicked }: Props) => {
  return (
    <div className='main'>
      <div className='main-body'>
        <p>
          We provide freely available image sources.
          <br />
          Access all the images, videos, music and tools you need to bring your
          ideas to life.
        </p>
        <div className='main-body-table'>
          {tabTable.map((item, idx) => {
            return (
              <div
                className='menu-tab'
                key={idx}
                onClick={() => {
                  onItemClicked(item.path);
                }}>
                <img src={item.background} />
                <div>
                  {item.label}
                  <br />
                  {item.labelEnglish}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
