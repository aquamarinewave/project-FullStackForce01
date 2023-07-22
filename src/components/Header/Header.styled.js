import styled from 'styled-components';

const MainHeader = styled.header`
  height: 28px;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    height: 44px;
    margin-top: 24px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 48px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default MainHeader;
