import styled from 'styled-components';

const OurFriendsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  display: flex;
  font-style: normal;
  font-size: 24px;
  line-height: normal;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    font-weight: 700;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;

export { OurFriendsPageContainer, Title };
