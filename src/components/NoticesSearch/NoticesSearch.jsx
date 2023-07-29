import {
  SearchContainer,
  SearchForm,
  SearchInput,
  SearchIconContainer,
  SearchIconBtn,
  IconSvg,
} from './NoticesSearch.styled';
import sprite from '../../images/icons.svg';

const NoticesSearch = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput type="text" name="searchforpet" placeholder="Search" />
        <SearchIconContainer>
          <SearchIconBtn type="button">
            <IconSvg width={24} height={24}>
              <use href={`${sprite}#icon-search`}></use>
            </IconSvg>
          </SearchIconBtn>
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default NoticesSearch;
