import styled from 'styled-components';

export const UserPageContainer = styled.div`
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
    margin-bottom: 18px;
  }
`;
