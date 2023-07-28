import styled from 'styled-components';

export const ModalCongratsBackdrop = styled.div`
  height: 100vh;
  width: 100vw;

  background: rgba(87, 86, 86, 0.6);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  /* border-radius: 4px;
  padding: 20px;
  margin: 0 auto;
  border-radius: 20px; */

  /* Shadow default */
  /* box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19); */

  @media screen and (min-width: 768px) {
    /* display: flex;
    width: 703px;
    height: 256px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 821px;
    height: 212px; */
  }
`;

export const ModalContent = styled.div`
  width: 280px;
  height: 287px;

  padding: 16px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  position: relative;

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 354px;

    padding: 24px;
    border-radius: 40px;
    /* display: flex;
    width: 703px;
    height: 256px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 821px;
    height: 212px; */
  }
`;

export const GoToProfileButton = styled.button`
  border-radius: 40px;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  color: var(--container-bg);
  cursor: pointer;
  display: inline-flex;
  width: 129px;
  height: 40px;
  padding: 9px 16px;
  align-items: center;

  gap: 8px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;

  /* letter-spacing: 0.64px; */

  &:hover,
  &:focus {
    background: var(--gradient-blue-bg);
  }
`;

export const IconPawPrint = styled.svg`
  stroke: currentColor;
`;
export const CloseButton = styled.button`
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

export const IconCrossSmallh = styled.svg`
  stroke: currentColor;
`;
