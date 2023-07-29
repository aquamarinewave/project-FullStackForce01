import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
  SearchIconBtn,
  IconSvg,
  IconCrossSmall,
} from './NoticesSearch.styled';
import sprite from '../../images/icons.svg';

const NoticesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('query');
  const pattern = text && text.length > 0 ? text : '';
  const [inputName, setInputName] = useState(pattern ?? '');

  const handleSubmit = event => {
    event.preventDefault();
    if (inputName.trim() === '') {
      alert('Type something in search input');
      return;
    }
    haldleFormSubmit(inputName);
    setInputName('');
  };

  const handleClear = () => {
    setInputName('');
  };

  const hangleNameOnChange = event => {
    setInputName(event.currentTarget.value.toLowerCase());
  };

  const haldleFormSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="searchforcategory"
          placeholder="Search"
          value={inputName}
          onChange={hangleNameOnChange}
          autoComplete="off"
        />
        <SearchIconContainer>
          <SearchIconBtn type="submit">
            <IconSvg width={24} height={24}>
              <use href={`${sprite}#icon-search`}></use>
            </IconSvg>
          </SearchIconBtn>
          {inputName.trim() !== '' && (
            <button type="button" onClick={handleClear}>
              <IconCrossSmall width={24} height={24}>
                <use href={`${sprite}#icon-cross-small`}></use>
              </IconCrossSmall>
            </button>
          )}
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default NoticesSearch;
