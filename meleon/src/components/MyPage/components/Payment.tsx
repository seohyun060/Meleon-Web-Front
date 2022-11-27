import CDateContainer from '@components/common/CDate/containers/CDateContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import CSelectContainer from '@components/common/CSelect/containers/CSelectContainer';
import useCoinReducer from '@hooks/useCoinReducer';
import { CoinHistoryItemType, FilterType } from '@typedef/mypage.types';
import React, { useState } from 'react';
import { images } from 'src/assets/images';
import CoinHistoryItemContainer from '../containers/CoinHistoryItemContainer';
import '../styles/payment.style.css';

type Props = {
  filter: FilterType;
  charge: number;
  listRef: React.RefObject<HTMLDivElement>;
  historyList: CoinHistoryItemType[];
  isMoreClicked: boolean;
  onApplyButtonClicked: () => void;
  onMoreButtonClicked: () => void;
  onFilterChange: (key: keyof FilterType, value: string) => void;
  onBenefitClicked: () => void;
  onHistoryClicked: () => void;
  onMinusClicked: () => void;
  onPlusClicked: () => void;
  onChargeClicked: () => void;
};

const Payment = ({
  listRef,
  charge,
  filter,
  isMoreClicked,
  historyList,
  onApplyButtonClicked,
  onMoreButtonClicked,
  onFilterChange,
  onBenefitClicked,
  onHistoryClicked,
  onMinusClicked,
  onPlusClicked,
  onChargeClicked,
}: Props) => {
  const date = new Date();
  const { coin, useCoin } = useCoinReducer();

  return (
    <div className='payment-root'>
      <section className='section'>
        <div className='box first'>
          <div className='row'>
            <span className='text'>보유 코인</span>
            <span className='coin'>{`${coin.toLocaleString()} Coin`}</span>
            <button className='history' onClick={onHistoryClicked}>
              내역보기
            </button>
          </div>
          <div className='divider'></div>
          <div className='row'>
            <span className='text'>{`${date.getMonth() + 1}월 충전 코인`}</span>
            <span className='coin'>{`${(
              coin - 1200
            ).toLocaleString()} Coin`}</span>
            <button className='history' onClick={onHistoryClicked}>
              내역보기
            </button>
          </div>
        </div>
        <div className='box second'>
          <div className='header'>
            <div className='text'>자동충전</div>
            <button className='setting'>설정</button>
          </div>
          <div className='content'>
            <div className='item'>
              <span className='text'>하한기준</span>
              <span className='coin'>3,000 Coin</span>
            </div>
            <div className='item'>
              <span className='text'>자동충전코인</span>
              <span className='coin'>3,00 Coin</span>
            </div>
            <button className='arrow'>
              <img src={images.right_arrow_18_black} alt='ic_arrow' />
            </button>
          </div>
        </div>
        <div className='box third'>
          <div className='header'>
            <div className='text'>혜택코인</div>
            <button className='benefit' onClick={onBenefitClicked}>
              등급 기준 및 혜택
            </button>
          </div>
          <div className='content'>
            <div className='item'>
              <span className='text'>사용코인</span>
              <span className='coin'>1,200 Coin</span>
            </div>
            <div className='coin-progress'>
              <span className='text'>
                {5000 - useCoin} 코인 더 사용 시{' '}
                <span className='colored'>2등급 달성!</span>
              </span>
              <div className='progress-bar'>
                <div className='inner-bar'>
                  <svg className='cursor' width={12} height={8}>
                    <polygon points='0,0 12,0 6,8' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='box four'>
          <div className='header'>
            <div className='text'>개별충전</div>
          </div>
          <div className='content'>
            <div className='display'>
              <button onClick={onMinusClicked}>-</button>
              <span className='coin'>{charge}</span>
              <button onClick={onPlusClicked}>+</button>
            </div>
            <button className='charge' onClick={onChargeClicked}>
              충전하기
            </button>
          </div>
        </div>
      </section>
      <section className='section' ref={listRef}>
        <h2 className='list-title'>코인 구매 내역</h2>
        <div className='divider'></div>
        <div className='filter'>
          <CDateContainer
            id={'start'}
            value={filter.startDate}
            onValueChanged={(value) => onFilterChange('startDate', value)}
          />
          <span className='text'>~</span>
          <CDateContainer
            id={'end'}
            value={filter.startDate}
            onValueChanged={(value) => onFilterChange('startDate', value)}
          />
          <CSelectContainer<string>
            options={[
              '전체',
              '음원',
              '3D',
              '이미지',
              '영상',
              '템플릿',
              '일러스트',
            ]}
            selected={filter.category}
            labelSelector={(option) => option}
            onSelected={(item) => onFilterChange('category', item)}
          />
          <CSelectContainer<string>
            options={['최신순', '제목순']}
            selected={filter.alignFilter}
            labelSelector={(option) => option}
            onSelected={(item) => onFilterChange('alignFilter', item)}
          />
          <button className='apply' onClick={onApplyButtonClicked}>
            적용
          </button>
        </div>
        <div className='list'>
          <div className='header'>
            <span className='col'>날짜</span>
            <span className='col'>세부사항</span>
            <span className='col'>사용코인</span>
            <span className='col'>잔여코인</span>
          </div>
          <div className='body'>
            {historyList.slice(0, isMoreClicked ? -1 : 9).map((item, index) => (
              <CoinHistoryItemContainer coinHistoryItem={item} key={index} />
            ))}
          </div>
          {!isMoreClicked && (
            <button className='more' onClick={onMoreButtonClicked}>
              <span className='text'>더보기</span>
              <img src={images.down_16} alt='ic_down' />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Payment;
