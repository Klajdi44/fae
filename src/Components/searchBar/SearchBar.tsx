import React from 'react';
import { Button, SearchInput } from 'evergreen-ui';

type Props = {
  buttonTxt: string;
  inputValue: string;
  placeHolder: string;
  onSumbit: (e: React.FormEvent) => void;
};
function SearchbyName(props: Props) {
  const { buttonTxt, inputValue, placeHolder, onSumbit } = props;
  return (
    <form onSubmit={onSumbit} className='input-wrapper'>
      <SearchInput
        value={inputValue}
        marginBottom={20}
        marginTop={20}
        placeholder={placeHolder}
      />
      <Button marginRight={16} appearance='minimal' intent='success'>
        {buttonTxt}
      </Button>
    </form>
  );
}

export default SearchbyName;
