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

export const UserCard = styled.div`
  position: relative;
  width: 100%;

  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 20px 8px 68px 8px;
  gap: 21px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background: var(--unnamed, #fff);
  margin-bottom: 57px;
`;
