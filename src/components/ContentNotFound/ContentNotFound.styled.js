import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 42px;
  }
`;

const NotFoundText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: var(--accent-color);
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export { NotFoundContainer, NotFoundText };
