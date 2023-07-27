import Icon from 'utils/Icon/Icon';
import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
  SearchIconBtn,
  IconSearch,
} from './NoticesSearch.styled';
import sprite from '../../images/icons.svg';

const Search = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput type="text" name="searchforpet" placeholder="Search" />
        <SearchIconContainer>
          <SearchIconBtn type="button">
            <IconSearch width={24} height={24}>
              <use href={`${sprite}#icon-pawprint-1`}></use>
            </IconSearch>
            <svg width={24} height={24}>
              <use href={`${sprite}#icon-pawprint-1`}></use>
            </svg>
          </SearchIconBtn>
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;
