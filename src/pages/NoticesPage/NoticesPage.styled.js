import styled from 'styled-components';

const NoticesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;

const Title = styled.h2`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;

  font-size: 24px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 48px;
  }
`;

export { NoticesPageContainer, Title };
