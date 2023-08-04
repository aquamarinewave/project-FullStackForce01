import styled from 'styled-components';

const stylesBtnActive = {
  lightblue: 'var(--lightblue)',
  darkblue: 'var(--dark-blue)',
  white: 'var(--main-light-color)',
};

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  width: 280px;
  background: var(--main-light-color);
  border-radius: 20px;
  position: relative;
  overflow-y: auto;
  max-height: calc(100vh - 40px);

  @media screen and (min-width: 768px) {
    width: 681px;
    border-radius: 40px;
  }
`;

export const ModalContent = styled.div`
  padding: 44px 12px 16px 12px;

  span {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    padding: 32px 32px 24px 32px;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 28px;
  }
`;

export const ModalImg = styled.div`
  position: relative;
  width: 262px;
  height: 298px;
  left: 50%;
  transform: translate(-50%) scale(1);

  @media screen and (min-width: 768px) {
    left: 0;
    transform: translate(0) scale(1);
  }
`;

export const ModalAvatar = styled.img`
  width: 262px;
  height: 298px;
  border-radius: 0px 0px 40px 40px;
`;

export const ModalCategory = styled.p`
  position: absolute;
  top: 16px;
  left: 0;
  width: 126px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightblue);
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
`;

export const ModalHeader = styled.h2`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    letter-spacing: -0.28px;
  }
`;

export const ModalInfoList = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 51px;
  }
`;

export const ModalInfoItemName = styled.ul`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  gap: 8px;
  font-size: 14px;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ModalInfoItemValue = styled.ul`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  gap: 10px;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    gap: 8px;
  }
`;

export const ModalContact = styled.li`
  color: var(--accent-color);
  font-weight: 500;

  a {
    border-bottom: 1px solid var(--accent-color);
  }
`;

export const ModalComments = styled.p`
  color: var(--main-color);
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.64px;
    margin-bottom: 70px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: end;
    gap: 17px;
  }
`;

export const ModalPhone = styled.a`
  display: flex;
  width: 256px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  color: var(--dark-blue);
  background: transparent;
  border: 2px solid var(--dark-blue);
  border-radius: 40px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover {
    background: var(--dark-blue, linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%));
    color: var(--main-light-color);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const ModalButtonAdd = styled.button`
  display: flex;
  gap: 6px;
  width: 256px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.isPrimary ? stylesBtnActive.darkblue : stylesBtnActive.white)};
  background: ${props => (props.isPrimary ? stylesBtnActive.lightblue : stylesBtnActive.darkblue)};
  border: 2px solid transparent;
  border-radius: 40px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover,
  &:focus {
    background: ${props => (props.isPrimary ? 'transparent' : 'var(--gradient-blue-bg)')};
    border: ${props => (props.isPrimary ? '2px solid var(--dark-blue)' : '2px solid transparent')};
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const CloseModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: transparent;
  background: transparent;
  position: absolute;
  top: 4px;
  right: 4px;
  width: 40px;
  height: 40px;
  padding: 0;
  z-index: 10;
  border-radius: 50%;

  &:hover,
  &:focus {
    background: var(--lightblue);
  }

  @media screen and (min-width: 768px) {
    top: 15px;
    right: 18px;
  }
`;

export const IconHeart = styled.svg`
  stroke: ${props => (props.isPrimary ? stylesBtnActive.darkblue : stylesBtnActive.white)};
  fill: ${props => (props.isPrimary ? stylesBtnActive.darkblue : 'transparent')};
`;

export const IconCross = styled.svg`
  stroke: var(--dark-blue);
`;
