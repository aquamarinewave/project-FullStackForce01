import styled from 'styled-components';

export const UserPageContainer = styled.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 32px;
  }
`;
