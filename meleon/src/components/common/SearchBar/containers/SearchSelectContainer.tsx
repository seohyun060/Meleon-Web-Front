import useDetectClickOut from '@hooks/useDetectClickOut';
import React, { useCallback, useEffect, useState } from 'react';
import SearchSelect from '../components/SearchSelect';
import CSelect from '../components/SearchSelect';

type Props<T> = {
  options: T[];
  selected: T | null;
  labelSelector: (item: T) => string;
  onSelected: (item: T) => void;
  placeholder?: string;
};

function SearchSelectContainer<T>({
  options,
  selected,
  labelSelector,
  onSelected,
  placeholder,
}: Props<T>) {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  const onItemSelected = useCallback((item: T) => {
    onSelected(item);
    setShow(false);
  }, []);

  return (
    <SearchSelect
      selected={selected}
      options={options}
      labelSelector={labelSelector}
      show={show}
      nodeRef={nodeRef}
      triggerRef={triggerRef}
      onItemSelected={onItemSelected}
      placeholder={placeholder}
    />
  );
}

export default SearchSelectContainer;
