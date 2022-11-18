export type TabType = 'userinfo' | 'download' | 'payment' | 'activity';

export type UserInfoType = {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  birth: string;
  address: string;
};

export type FilterType = {
  startDate: string;
  endDate: string;
  category: string;
  alignFilter: '최신순' | '제목순';
};

export type CoinHistoryItemType = {
  date: string;
  img: string;
  detail: string;
  usedCoin: number;
  remainCoin: number;
};
