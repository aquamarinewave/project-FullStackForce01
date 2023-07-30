import styled from 'styled-components';

export const UserPetsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;
export const InfoCard = styled.div`
  text-align: center;

  width: 280px;
  border-radius: 4px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 703px;
    height: 256px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    height: 212px;
  }
`;

export const Title = styled.h3`
  color: var(--main-color);

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;

    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.44px;
  }
`;

export const Text = styled.p`
  color: var(--main-color);
  margin-top: 20px;

  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;

    font-weight: 500;
    letter-spacing: 1.44px;
  }
`;
