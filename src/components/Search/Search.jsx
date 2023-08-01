import { useState } from 'react';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
  SearchIconBtn,
  IconSearch,
  IconCrossSmall,
} from './Search.styled';
import sprite from '../../images/icons.svg';

const Search = ({ pattern, onSubmit, onClear }) => {
  const [inputName, setInputName] = useState(pattern ?? '');

  const hangleNameOnChange = event => {
    setInputName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (inputName.trim() === '') {
      return;
    }
    onSubmit(inputName);
  };

  const handleClear = () => {
    setInputName('');
    onClear();
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchfornews"
          placeholder="Search"
          value={inputName}
          onChange={hangleNameOnChange}
          autoComplete="off"
          autoFocus
        />
        <SearchIconContainer>
          <SearchIconBtn type="submit">
            <IconSearch width={24} height={24}>
              <use href={`${sprite}#icon-search`}></use>
            </IconSearch>
          </SearchIconBtn>
          {inputName.trim() !== '' && (
            <SearchIconBtn type="button" onClick={handleClear}>
              <IconCrossSmall width={24} height={24}>
                <use href={`${sprite}#icon-cross-small`}></use>
              </IconCrossSmall>
            </SearchIconBtn>
          )}
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;
