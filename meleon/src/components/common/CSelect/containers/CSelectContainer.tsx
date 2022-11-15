import useDetectClickOut from '@hooks/useDetectClickOut';
import React, { useCallback, useEffect, useState } from 'react';
import CSelect from '../CSelect';

type Props<T> = {
  options: T[];
  selected: T | null;
  labelSelector: (item: T) => string;
  onSelected: (item: T) => void;
};

function CSelectContainer<T>({
  options,
  selected,
  labelSelector,
  onSelected,
}: Props<T>) {
  const { show, nodeRef, triggerRef, setShow } = useDetectClickOut(false);

  const onItemSelected = useCallback((item: T) => {
    onSelected(item);
    setShow(false);
  }, []);

  return (
    <CSelect
      selected={selected}
      options={options}
      labelSelector={labelSelector}
      show={show}
      nodeRef={nodeRef}
      triggerRef={triggerRef}
      onItemSelected={onItemSelected}
    />
  );
}

export default CSelectContainer;
