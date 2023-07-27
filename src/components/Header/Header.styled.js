import styled from 'styled-components';

export const MainHeader = styled.header`
  height: 28px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  position: sticky;

  @media screen and (min-width: 768px) {
    height: 44px;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 20px;
  }
`;
