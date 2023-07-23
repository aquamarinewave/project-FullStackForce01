import styled from 'styled-components';

const SearchContainer = styled.div`
  width: 100%;
`;

const SearchForm = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 20px;
`;

const SearchInput = styled.input`
  font-size: 14px;
  border: none;
  padding-left: 20px;
  width: 100%;
  height: 44px;
  padding-bottom: 4px;
  border-radius: 24px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.2);
`;

const SearchIconContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  bottom: 31px;
  right: 16px;
`;

const SearchIconBtn = styled.button`
  border: none;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export { SearchContainer, SearchForm, SearchInput, SearchIconContainer, SearchIconBtn };
