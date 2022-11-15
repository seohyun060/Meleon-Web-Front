import React, { useCallback, useState } from 'react';
import SearchBar from '../SearchBar';

type Props<T> = {
  option: T[];
  selected: T | null;
  labelSelector: (item: T) => string;
  onSelected: (item: T) => void;
  selectPlaceholder?: string;
  option2: T[];
  selected2: T | null;
  labelSelector2: (item: T) => string;
  onSelected2: (item: T) => void;
  selectPlaceholder2?: string;
  inputPlaceholder?: string;
  inputValue: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

function SearchBarContainer<T>(props: Props<T>) {
  return <SearchBar {...props} />;
}

export default SearchBarContainer;
