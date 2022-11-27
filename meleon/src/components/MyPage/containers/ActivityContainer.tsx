import { ContentType } from '@typedef/content.types';
import React, { useCallback, useState } from 'react';
import Activity from '../components/Activity';

type Props = {};

const ActivityContainer = (props: Props) => {
  const [tab, setTab] = useState<ContentType>('image');

  const onTabClicked = useCallback((tab: ContentType) => {
    setTab(tab);
  }, []);

  return <Activity currentTab={tab} onTabClicked={onTabClicked} />;
};

export default ActivityContainer;
