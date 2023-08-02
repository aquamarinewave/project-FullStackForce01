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

export const WrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @media screen and (min-width: 1280px) {
  }
`;

export const UserCard = styled.div`
  margin-right: 32px;
  position: relative;
  width: 100%;

  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  padding: 20px 8px;
  gap: 21px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  background: var(--main-light-color);
  margin-bottom: 57px;
  @media screen and (min-width: 768px) {
    margin: 0px;
    height: 291px;
    width: 704px;
    padding: 20px 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 100%;
    height: 100%;
    margin-bottom: 57px;
  }
`;

export const ProfileTitle = styled.h2`
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 24px;
`;
