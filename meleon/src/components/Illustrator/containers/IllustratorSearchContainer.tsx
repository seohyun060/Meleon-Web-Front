import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IllustratorSearch from '../components/IllustratorSearch';

const IllustratorSearchContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);

  const [searchOption1, setSearchOption1] = useState([
    '음원',
    '영상',
    '템플릿',
    '이미지',
    '일러스트',
    '3D',
  ]);
  const [searchOption2, setSearchOption2] = useState([
    '전체',
    '화려한',
    '감성적인',
    '어두운',
    '웅장한',
  ]);

  const [searchSelected1, setSearchSelected1] = useState(searchOption1[0]);
  const [searchSelected2, setSearchSelected2] = useState(searchOption2[0]);

  const [searchInput, setSearchInput] = useState('');

  const labelSelector1 = useCallback((item: string) => {
    return item;
  }, []);

  const labelSelector2 = useCallback((item: string) => {
    return item;
  }, []);

  const onSelected1 = useCallback((item: string) => {
    setSearchSelected1(item);
  }, []);

  const onSelected2 = useCallback((item: string) => {
    setSearchSelected2(item);
  }, []);

  const onSearchInputChanged = useCallback((value: string) => {
    setSearchInput(value);
  }, []);

  const onSubmitBtnClicked = useCallback(() => {
    navigate(`/${path}/search?q=${searchInput}`);
  }, [path, searchInput]);

  const onTagClicked = useCallback(
    (item: string) => {
      navigate(`/${path}/search?q=${item}`);
    },
    [path],
  );

  useEffect(() => {
    setPath(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <IllustratorSearch
      searchOption1={searchOption1}
      searchOption2={searchOption2}
      searchSelected1={searchSelected1}
      searchSelected2={searchSelected2}
      searchInput={searchInput}
      labelSelector1={labelSelector1}
      labelSelector2={labelSelector2}
      onSelected1={onSelected1}
      onSelected2={onSelected2}
      onSearchInputChanged={onSearchInputChanged}
      onSubmitBtnClicked={onSubmitBtnClicked}
      onTagClicked={onTagClicked}
    />
  );
};

export default IllustratorSearchContainer;
