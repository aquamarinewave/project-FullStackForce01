import styled from 'styled-components';

export const OurFriendsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-style: normal;
  font-size: 24px;
  line-height: normal;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

