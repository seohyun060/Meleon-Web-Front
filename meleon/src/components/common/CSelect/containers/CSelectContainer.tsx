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
  const [optionVisible, setOptionVisible] = useState(false);

  const onSelectInputClicked = useCallback(() => {
    setOptionVisible((prev) => !prev);
  }, []);

  const onItemSelected = useCallback((item: T) => {
    setOptionVisible(false);
    onSelected(item);
  }, []);

  return (
    <CSelect
      onSelectInputClicked={onSelectInputClicked}
      selected={selected}
      options={options}
      labelSelector={labelSelector}
      optionVisible={optionVisible}
      onItemSelected={onItemSelected}
    />
  );
}

export default CSelectContainer;
