import styled from 'styled-components';

export const PetDataContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    gap: 24px;
    margin-top: 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Title = styled.h2`
  color: var(--main-color);

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
