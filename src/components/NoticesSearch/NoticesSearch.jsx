import Icon from 'utils/Icon/Icon';
import { SearchContainer, SearchForm, SearchInput, SearchIconContainer, SearchIconBtn } from './NoticesSearch.styled';

const NoticesSearch = () => {
  return (
    <SearchContainer>
      <SearchForm>
        <SearchInput type="text" name="searchforpet" placeholder="Search" />
        <SearchIconContainer>
          <SearchIconBtn type="button">
            <Icon name="search" color="var(--dark-blue)" size={17} />
          </SearchIconBtn>
        </SearchIconContainer>
      </SearchForm>
    </SearchContainer>
  );
};

export default NoticesSearch;
