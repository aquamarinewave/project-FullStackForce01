import styled from 'styled-components';

export const PetCard = styled.div`
  width: 280px;

  border-radius: 4px;
  padding: 20px 20px 40px 20px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    display: flex;
    width: 703px;
    height: 256px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
    height: 212px;
  }
`;

export const PetFoto = styled.img`
  width: 240px;
  height: 240px;

  border-radius: 20px;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;

    margin-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;

    margin-right: 32px;
  }
`;

export const PetDesc = styled.ul`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Description = styled.li`
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(22 / 14);
  /* line-height: 22px; */
  letter-spacing: 0.56px;

  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    color: var(--main-color);

    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;

export const Subtitle = styled.span`
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const IconTrash = styled.svg`
  fill: transparent;
  stroke: var(--dark-blue);
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  width: 40px;
  height: 40px;

  background: transparent;
  border: none;
  border-radius: 50%;

  &:hover,
  &:focus {
    background: var(--lightblue);
  }
`;

export const InfoTitle = styled.h3`
  color: var(--main-color);

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.96px;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    color: #000;
    font-size: 28px;
    letter-spacing: -0.28px;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const InfoDesc = styled.p`
  width: 240px;

  color: var(--main-color);

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;

  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 393px;
    color: #000;

    font-size: 16px;
    letter-spacing: -0.16px;
  }

  @media screen and (min-width: 1280px) {
  }
`;
