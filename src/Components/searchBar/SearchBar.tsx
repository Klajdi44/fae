import React from 'react';
import { SearchInput, Button } from 'evergreen-ui';
import { Link } from 'react-router-dom';

type Props = {
  inputValue: any;
  onInput: any;
  placeHolder: string;
  buttonTxt?: string;
  appearance?: any;
  intent?: any;
  linkTo?: any;
  onSumbit: (e: React.FormEvent) => void;
};
function SearchbyName(props: Props) {
  const { inputValue, placeHolder, onSumbit, onInput } = props;
  return (
    <div className='form-wrapper'>
      <form onSubmit={onSumbit} className='input-wrapper'>
        <SearchInput
          value={inputValue}
          marginBottom={20}
          marginTop={20}
          placeholder={placeHolder}
          onInput={onInput}
        />
      </form>
      {props.buttonTxt && (
        <Link to={props.linkTo}>
          <Button intent={props?.intent} appearance={props.appearance}>
            {' '}
            {props.buttonTxt}
          </Button>
        </Link>
      )}
    </div>
  );
}

export default SearchbyName;
