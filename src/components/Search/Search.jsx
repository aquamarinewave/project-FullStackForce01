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

const Search = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput type="text" name="searchforpet" placeholder="Search" />
        <SearchIconContainer>
          <SearchIconBtn type="button">
            <IconSearch width={24} height={24}>
              <use href={`${sprite}#icon-search`}></use>
            </IconSearch>
            <IconCrossSmall width={24} height={24}>
              <use href={`${sprite}#icon-cross-small`}></use>
            </IconCrossSmall>
          </SearchIconBtn>
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default Search;
