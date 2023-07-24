import styled from 'styled-components';

export const PetCard = styled.div`
  width: 280px;

  border-radius: 4px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff;
  /* Shadow default */
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    display: flex;
    width: 703px;
    height: 256px;
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

  /* padding: 20px;
  margin: 0 auto;
  border-radius: 20px;
  background: #fff; */
  /* Shadow default */
  /* box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19); */

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
`;

export const Description = styled.li`
  color: #000;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: calc(22 / 14);
  /* line-height: 22px; */
  letter-spacing: 0.56px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    color: var(--main-color);

    &:not(:last-child) {
      margin-bottom: 16px;
    }
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

export const DeleteButton = styled.button`
  position: absolute;
  top: -12px;
  right: -12px;
  padding: 0;
  width: 40px;
  height: 40px;

  background: transparent;
  border: none;
  border-radius: 50%;

  cursor: pointer;
  color: var(--dark-blue);

  &:hover {
    background: var(--dark-blue);
    color: white;
  }
`;

export const IconTrash = styled.svg`
  stroke: currentColor;
`;
