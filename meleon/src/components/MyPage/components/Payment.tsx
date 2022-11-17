import CDateContainer from '@components/common/CDate/containers/CDateContainer';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import CSelectContainer from '@components/common/CSelect/containers/CSelectContainer';
import { CoinHistoryItemType, FilterType } from '@typedef/mypage.types';
import React from 'react';
import { images } from 'src/assets/images';
import CoinHistoryItemContainer from '../containers/CoinHistoryItemContainer';
import '../styles/payment.style.css';

type Props = {
  filter: FilterType;
  charge: number;
  listRef: React.RefObject<HTMLDivElement>;
  onFilterChange: (key: keyof FilterType, value: string) => void;
  onBenefitClicked: () => void;
  onHistoryClicked: () => void;
  onMinusClicked: () => void;
  onPlusClicked: () => void;
  onChargeClicked: () => void;
};

const coinHistoryDummy: CoinHistoryItemType[] = [
  {
    date: '2022-01-12',
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fback_pic%2F03%2F54%2F06%2F62579986dba62df.jpg&imgrefurl=https%3A%2F%2Fkor.pngtree.com%2Ffree-colorful-background&tbnid=ZdOqcBF7XdSCDM&vet=12ahUKEwiZz8-R17T7AhVM0YsBHWlYA1AQMygFegUIARDkAQ..i&docid=Pp0g47Ydv0EWIM&w=500&h=260&q=%EB%B0%B0%EA%B2%BD&ved=2ahUKEwiZz8-R17T7AhVM0YsBHWlYA1AQMygFegUIARDkAQ',
    detail: '화려한, 수채화',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fback_pic%2F03%2F54%2F06%2F62579986dba62df.jpg&imgrefurl=https%3A%2F%2Fkor.pngtree.com%2Ffree-colorful-background&tbnid=ZdOqcBF7XdSCDM&vet=12ahUKEwiZz8-R17T7AhVM0YsBHWlYA1AQMygFegUIARDkAQ..i&docid=Pp0g47Ydv0EWIM&w=500&h=260&q=%EB%B0%B0%EA%B2%BD&ved=2ahUKEwiZz8-R17T7AhVM0YsBHWlYA1AQMygFegUIARDkAQ',
    detail: '화려한, 수채화',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'data:image/jpeg;base64,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',
    detail: 'dimmed frost',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUQEBIVFRUVFQ8PFRUPEA8PDxUPFRUWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0fHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAMxAAAgIBAwMBBwMDBAMAAAAAAAECEQMSITEEQVEFEyJhcYGRoUKx8FLR4RQywfEVYnL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAIxEAAwACAgICAwEBAAAAAAAAAAECAxESIQQxQVETFGFxIv/aAAwDAQACEQMRAD8A+xw+lTmrqv8A6tP7GdR6TOKurXeufsfWKBkoBfs5NlfCT5PosK4a+4efpU3set1XR+9qT+hNl6V1d0+97g/n3W96HTC46II9PS3YyPSq1KuOCjp8TV6v7/UNir8h70mNnEiXJ0UXu9zH0CK7NAXkX9hPFP0eXHp9PIeZ7Jb18CvJD6kinctLTKot12JqUuiHJ0OreP8AcbHpZQjUr3r5Ity544/dil5Ay9Wkve5r8j/yW/8ABPCUeP1WBVt+Tz2WdTmskaLo3rsjyNb6FyMoY0AMEgMxjKBaNMAoyhlAtGmAUdQVGuJxwtgsZRjiaYBR1B0ZRxmgaNoKjUjgkCkFFGpDcWK3S7gthJGJFWLA2uD1Oi9H8/A93puijFcb92QZvLmfXZdi8Zv2fPen+l6ndbfHgz1X0zTvFfF0fWRx0qQnL0qd33VP/BIvNrnt+ij8E8dHwWkLBgcnSPqcno2NLZfuzI9KorZL6Ff7sNdCF4lb7PL6bonHdv6cl2PHSr68FSw92Kmt9hDzO2PWJSfY0LzSoH23xsyWTyROkApeyWWXfexWfLY+cU3uzPZrwIfIoTSPPsxoqzQrcinIDWvY+Xv0FZlgJjoYzUawImwwe85Pv+EV4en8jHFLsPVCW0fPdZ0kk3JNNp+H+Dynlbe7PpPVG4xbj3dHjdP6dKe791fFf8Hp4cq4cqI8kN1qSJ49TqK3Hw9KlVy28Lk9fpehWPduyP1ht1T2V96CXkO64x6+wXhUzyr39HjZsDi6dfQS0OmLaLURVr4AaMoNoyggQKMoZR2k7Zgugmtvj/wbRjOOFNBwiczDTEC0ZQdHUacDRV0XS63QhI9v03D7t+ROW+MjsMcqIuu6eEUtO7vcf6J01yUvBX/oIyuv8FPp/Q6Hf/RLeeVDW+yucD5p6PWwrYfARBjUzxbrbL9dDhc2C5ASkZyOUgzYpoOjGjuWhmgGLaGtANDJoFo9ZgbmxZzYr2KMQUGLs3WYmboDP4JHAp5ZugB9jJfERHEU440bCJzDXQNVsbYnIE2AE2CkTZN+Rcn4KcuOldCNHj6jIQbf0Q9TNLe9/wBzzep6u01/KKvVMO9rseU0evgxzxTPOz5HvQugWhjQNFZIxdGUMoyjQQA44r/Ukvi3+yVmJHM4wzI1wuFtvs38WLaG0Nh0zl/tRzaXs1S36I2jKKc3TuIrQaqTMctPQFHUMUDZYztnaAhE93pcb0pnn9L073dP7Ho9PPauKJc9bXRZ4867ZVi5K4shhIbDIeZkWz0IZcpG6yR5RSz0xM4Ww6pI9JSMchEchzmLeNhJobqMsVqO1GcGbtDGwbBcjNQ2YYFUj1UzrEKQSkTKgeI2jNJkZBph6RnaA0GtBKYcGjkkY2wKBY6bQDCaMTFtBQRptmJG7DdEixaXtwU2BJB7MXR5ebEpSd8J347Hh9Vhin7r7vZ8n1Cwpt2ef6h6bxoj8H/dl/j50npic2Pa6PnmgaKc+Fxel8oZ0fQyycbJd358HoO5S5N9EKht6RDpM0nuf+HS5d/DgOXoyfHuv7iv28S+Rn6t/R4Gkyj6LD6JH9Tb+Wx5HU9M4ycaa3dKnddgsfkRb1LAvBULbJEi3FkpfyhXsJJ7xf1TPR6Po0t5O74XY3LcpdhYorYmHSqW73/YKXRLwX+zS4Mo8+vJrfRfOCddoij6entx8SjpvT4R3krf4+xQY2Lfk2+thLBK70G6SPLy5FbRbOZFlqxmJr5MyJ/ACyjcciZRGRlQeT+GY/6VajEydzNUwZl6NqkVrIb7Uk1gSyPscsezHei5ZQ1MixyKYoCoSCVbNyZH2JH1Ev4rLowGLEHGWZ+AKxtlikEpCFILUeKnotclCkHrJlI3WFzAclCYakSe0CeQ5ZEY4GyyGLITuZykD+RhcCn2oOoXFhOdDZToFpIZFjoMkjkseslD1DQtjNHg5sjzdbXPBDm9SvhlEYKoVWRL2V+pdLGabpX5rczpsahFJdua7sRHqWlTd/M6OTe/5QxxXHi30ZNTvZdCN7jfZ/EmxZNStDHMivp6ZQu/Q5IVmadfD8C55GBJ7C+X0Eo+xeXIITDmCojoo1yjmwQ0DJHUq2dLQDkLlIKTXAqQc42vYLtAykJmMkhbGztAvQls01nKFj9itaOSMY6EUTzmrHRDYi7SOcgoAoZEylro2XvsZjRZjJIFWORPabKJaKccR6RPCQ1SJnLGKkJUglImeQ1ZDzFNFbSKdZmsn1nOQawNgtpD9ZusQpBJmPx6R3KRuoOLExGJjcWBtg3aSHJnIBMJyLsePXRLd/JPmypOrMy9RStE/Uy3tCU9uWehOJaRFWR7K+rza4bf8EEMEqunXlJ0U4ekk+dl+T1+lScarZbbmVkWNaXZyh5Htnz6yNDYarTp03+C5dFWS1st3vv9iyaVULzeVMa0tjMWCq9sGEklsbrEt1sgdR4+S91tHozGkPbBlIS5nKQCoPiHjjbH1FbdxGOQ2O4yWBSGzkmuBccUZfM2QpySaY6Nti3pI8/Lh95+N/8AoVKVHo5mQZkW/kbZOoWhUpANmSAsLoL4NmzIs2jIoMXvrQVN8AS6Z87fUpg64Me42cuhNYt+yfHirn8MNQYzQMhJLY106OSUi4IZKdBpqwscU3xx9rA1rthb30gcGZvZffsN94bW4+MBV5EvSGRDftnlqQSYmLGxPNlHoUw0EYkaPmRLo0JGI6wtA7GoXOb7IJSN1Dpcz3oTSqnrZuNvudkzdgoBvEnzv9aNnJNPtA1jqV0Txipdtx+Hov6uNns6KMHTxjwUxYrJ5aXUmzh+aBjBcLYFRdXf0ClNCJ5SOvKUj1i2HKZPOYM8gmeQkvM6KYx6NlIBzEzyA6weQ7iO1hqZNqNUxs9gtFSkNhMkjMapD5hiapFXtSLrMrXCfz7Be0OlO1RZ4+pfZLmTa6AhltC8qAeOuDYzsqvGmtyTxkaeqETRmgbJA0LQ85sxRDhivhDlgf8AS/szUDTSAhEJRRmRNJbPxwKkpd0+/Z9h84ia82mOdE2XkPTJdn9mBPHLun3/AByOiNCbyckZknZT0jdC8OC+U/HD55HaWtuO++xl6a0bG98mPU6CeZEOSb8/YBTYtYUG8+g4RNiK9oFFnlLR67TKDhaYSkPQhjEjaOgxjaGTDYu7S9i6MSCeQ5MY8XyxSzb6QcCiKJ4sKWShNTr0OT37LFkBeUiecB5jys6pMriU0V5MhPKYmWYXLKScW2PmdDZ5CfJkMlkFSY2cYW9AyyGKYuaBchqk7ZRGQ1MmwsdNNDMUcq0LyVpbGLIGshOl5NnL4nrxiSWzy7ytvQ72oSyEURsLBlrYdJ6KkBW+wcVsdjhffcphJLZJkb3o7QboQK25C1GPEglmYcItbq/8HPLJPv578me3fH9gPaNtW9r5pP5/uFGPXsXeTfo1SvnV2e3z+RkmuLk17ye18vblfAZtzqd1/Sm9nt+yAi+2t+d1txd/cYhDezJLxKV3Ds1Srnjnjc2UvjLbXW3Z3d7GxnbtyfEd9O+z2+XYxtf1y31p+72tfhmmHKvMuVzFLs/hsJyye27ey5v+UPcu2t8947r8fFisrtrdvbv83scjhVG0acEYTKQ2MiVTGwkeEkj6F7KYsdCIiDKcSHrsTXQxRCoNwa2fzBnwU419EeSvtCMi3Cxs5Iap/wA2HXS1piccve0bAVlkDLIS58hBkdL0ejjmX2zp5RTzCZzAsgyP7LpX0PeUB5RLsBS33FLQemUe0AeQGc49hbmgJthORksgOsTKYzGh07YD6K8Iftd/wJT8GwiWYY49kmWuXRXllsT6R+PG2g44HyU1eyeI0BhxFMcZ0INDtIWNJi8tNCpPwZEox4U7t0dhkovi/iU7SWkSNNvbJ442+wXsvJYsiW6E5c19judN+juMpexEsdIPH2Wvj4Jc8/sgGDQaFMa5/wDtwvHdK1+UjnPlOe1dr/VyuewmjqC0CPWVql7Tz+n5f5AjS/V9k+G+RaQ2WFL9Se9dvHPJhwWvf/fy5Xt/OROXtve3ivoa4bXf0OlCu9mo4VRtBUbRuzjyljY3HEZOSYWNHiqT3nQ3Ci3GqJsUfJVjXgYhVFkIalu9+xNmj/YfjkDmQ7A+ybOuiScAPZtD3DubCt7HXCfYrHla6PNy5GtyLLnsu6ujzMqI7TPRhoCWUPDmpk8kOktOz8WQ5vWmWY/sdnyPsv7kE5jcma/2EyRPilz7G09gORimzdIcMY1IDYeNFeOO1+BWKJTHx2GzIq2bDE3winFhrkzFAoxwHK/jYlyz0ei6eLXxHrBHgiwSZXGQu8jM4B5MadUhn+kTWwWKhkp0bGSkKpJ9EGXpWl5+RPjh3+h6eTLtueZKR6WG6tdkOWVDMeJ7sVRRLJ2QllC38iK0AZQdGUEADR1B6TdJuztC6OoaonaTNm6F0dpGaTtJ2ztC6NoOjqO2dogWCg1Ew48pHtMOOUoxZkccEmC0imMu4UmzjijESZvTFtAyiccOp9CInvZB1ECGeNWccSUehATxxW65I8u73OOIrxp12WRbUipI2MGccKcpMYm9DI4ihdPtZxxTMrQiqezowoOKOOFt6DRT063K0YcJ3/0E10PxlEEccUTKZPVNDoTNeTuacVYsMaTI8mWttEubJb/AqjDi6UktIhptvs6jKNOCMMo1ROOOOG4sLltFWNydJKPK+1Mw4mvK1fEfGNOdgxxt8L8DYdFN/pe3nY44zJmcvSOnGmti3ifFP7AOJxwyLbBqUgdJ1GHDNgaP/9k=',
    detail: '감성넘치는 이미지',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqcEqlwt0L2jD4iLQFWvkFeAi7h3vgs-lPow&usqp=CAU',
    detail: '물결무늬 일러스트',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPL4j9K2CE8PSrZ4ACjKtIGQLpNbGShjVQeg&usqp=CAU',
    detail: '지는 석양',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Funderkg.co.kr%2Ffreeboard%2F2822182&psig=AOvVaw3CuADD_hRNJkwW9wkhDQlk&ust=1668756124945000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjOmpLXtPsCFQAAAAAdAAAAABAF',
    detail: '물결무늬',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'https://www.enago.com/academy/kr/wp-content/uploads/sites/10/2021/05/BackgroundForResearch.jpg',
    detail: '도서관 책장',
    usedCoin: 1200,
    remainCoin: 2500,
  },
  {
    date: '2022-01-12',
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fback_pic%2F03%2F54%2F06%2F62579986dba62df.jpg&imgrefurl=https%3A%2F%2Fkor.pngtree.com%2Ffree-colorful-background&tbnid=ZdOqcBF7XdSCDM&vet=12ahUKEwiZz8-R17T7AhVM0YsBHWlYA1AQMygFegUIARDkAQ..i&docid=Pp0g47Ydv0EWIM&w=500&h=260&q=%EB%B0%B0%EA%B2%BD&ved=2ahUKEwiZz8-R17T7AhVM0YsBHWlYA1AQMygFegUIARDkAQ',
    detail: '화려한, 수채화',
    usedCoin: 1200,
    remainCoin: 2500,
  },
];

const Payment = ({
  listRef,
  charge,
  filter,
  onFilterChange,
  onBenefitClicked,
  onHistoryClicked,
  onMinusClicked,
  onPlusClicked,
  onChargeClicked,
}: Props) => {
  const date = new Date();
  console.log(filter.startDate);
  return (
    <div className='payment-root'>
      <section className='section'>
        <div className='box first'>
          <div className='row'>
            <span className='text'>보유 코인</span>
            <span className='coin'>3,000 Coin</span>
            <button className='history' onClick={onHistoryClicked}>
              내역보기
            </button>
          </div>
          <div className='divider'></div>
          <div className='row'>
            <span className='text'>{`${date.getMonth() + 1}월 충전 코인`}</span>
            <span className='coin'>3,000 Coin</span>
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
                1,000 코인 더 사용 시{' '}
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
            id={'start'}
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
          <button className='apply'>적용</button>
        </div>
        <div className='list'>
          <div className='header'>
            <span className='col'>날짜</span>
            <span className='col'>세부사항</span>
            <span className='col'>사용코인</span>
            <span className='col'>잔여코인</span>
          </div>
          <div className='body'>
            {coinHistoryDummy.map((item, index) => (
              <CoinHistoryItemContainer coinHistoryItem={item} key={index} />
            ))}
          </div>
          <button className='more'>
            <span className='test'>더보기</span>
            <img src={images.down_16} alt='ic_down' />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Payment;
