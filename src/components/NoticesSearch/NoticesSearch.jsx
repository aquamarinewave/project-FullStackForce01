import { useEffect, useState } from 'react';
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

const NoticesSearch = ({ pattern, onSubmit, onClear, categoryName }) => {
  const [inputName, setInputName] = useState(pattern ?? '');

  useEffect(() => {
    setInputName('');
  }, [categoryName]);

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

export default NoticesSearch;
