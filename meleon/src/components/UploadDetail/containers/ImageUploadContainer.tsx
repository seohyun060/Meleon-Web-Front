import SimplePopup from '@components/common/SimplePopup/SimplePopup';
import usePopup from '@hooks/usePopup';
import { ImageUploadType } from '@typedef/content.types';
import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageUpload from '../components/ImageUpload';

type Props = {};

const ImageUploadContainer = (props: Props) => {
  const navigate = useNavigate();
  const { __showPopup, __hidePopup } = usePopup();

  const [inputObject, setInputObject] = useState<ImageUploadType>({
    title: '',
    content: '',
    smallTag: '소분류1',
    bigTag: '중분류1',
    coin: 0,
  });

  const isDone = useMemo(
    () => Boolean(inputObject.title && inputObject.content),
    [inputObject],
  );

  const onInputChange = useCallback(
    (key: keyof ImageUploadType, value: string) => {
      setInputObject((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    [],
  );

  const onMinusClicked = useCallback(() => {
    if (inputObject.coin <= 0) {
      return;
    }
    setInputObject((prev) => ({
      ...prev,
      coin: prev.coin - 1,
    }));
  }, [inputObject]);

  const onPlusClicked = useCallback(() => {
    setInputObject((prev) => ({
      ...prev,
      coin: prev.coin + 1,
    }));
  }, []);

  const onConfirm = useCallback(() => {
    __hidePopup();
    setTimeout(() => {
      navigate('/mypage?tab=activity');
    }, 500);
  }, [__hidePopup, navigate]);

  const onUploadButtonClicked = useCallback(() => {
    if (!isDone) {
      __showPopup(<SimplePopup content='내용을 정확히 입력해주세요' />);
      return;
    }
    __showPopup(
      <SimplePopup
        content={`${inputObject.title}를 업로드하였습니다. (관리자 승인후 등록됩니다)`}
        onConfirm={onConfirm}
      />,
    );
  }, [isDone, inputObject, __showPopup, SimplePopup, onConfirm]);

  const onImageUpload = useCallback(() => {}, []);

  return (
    <ImageUpload
      inputObject={inputObject}
      onInputChange={onInputChange}
      onPlusClicked={onPlusClicked}
      onMinusClicked={onMinusClicked}
      onUploadButtonClicked={onUploadButtonClicked}
      onImageUpload={onImageUpload}
    />
  );
};

export default ImageUploadContainer;
