import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 280px;
  height: 445px;
  position: relative;
  padding: 60px 20px;
  background: var(--main-light-color);
  color: #000;
  border-radius: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 429px;
    border-radius: 40px;
    padding: 60px 40px;
  }
`;

export const ModalHeader = styled.h2`
  color: var(--main-color);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const ModalText = styled.p`
  color: var(--main-color);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`;

export const ModalAuth = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%) scale(1);
`;

export const CloseModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  background: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  padding: 0;
  z-index: 10;
  border-radius: 50%;

  &:hover {
    background: var(--lightblue);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;
