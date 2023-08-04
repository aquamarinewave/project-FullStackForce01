import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 82px;
  }
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  font-size: 14px;
  border: 2px solid transparent;
  padding-left: 20px;
  width: 100%;
  height: 42px;
  border-radius: 24px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.2);

  &:hover,
  &:focus {
    border: 2px solid var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    max-width: 608px;
  }
`;

const SearchIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  bottom: 10px;
  right: 10px;
  @media screen and (min-width: 768px) {
    right: 66px;
  }
  @media screen and (min-width: 1280px) {
    right: 336px;
  }
`;

const SearchIconBtn = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  cursor: pointer;
`;

const IconSearch = styled.svg`
  fill: var(--dark-blue);
`;

const IconCrossSmall = styled.svg`
  stroke: var(--accent-color);
`;

export { SearchContainer, SearchForm, SearchInput, SearchIconContainer, SearchIconBtn, IconSearch, IconCrossSmall };
