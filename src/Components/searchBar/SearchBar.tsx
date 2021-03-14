import React from 'react';
import { SearchInput } from 'evergreen-ui';

type Props = {
  inputValue: any;
  onInput: any;
  placeHolder: string;
  onSumbit: (e: React.FormEvent) => void;
};
function SearchbyName(props: Props) {
  const { inputValue, placeHolder, onSumbit, onInput } = props;
  return (
    <form onSubmit={onSumbit} className='input-wrapper'>
      <SearchInput
        value={inputValue}
        marginBottom={20}
        marginTop={20}
        placeholder={placeHolder}
        onInput={onInput}
      />
    </form>
  );
}

export default SearchbyName;
