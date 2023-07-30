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
  position: relative;
  width: 280px;
  padding: 44px 20px 16px 20px;
  background: var(--main-light-color);
  border-radius: 40px;
  @media screen and (min-width: 1280px) {
    width: 681px;
    height: 540px;
  }
`;

export const ModalContent = styled.div`
  @media screen and (min-width: 1280px) {
    padding: 32px;
    width: 681px;

    span {
      display: flex;
    }
  }
`;

export const ModalInfo = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const ModalImg = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  margin-bottom: 12px;
  @media screen and (min-width: 1280px) {
    width: 262px;
    height: 298px;
  }
`;

export const ModalAvatar = styled.img`
  width: 100%;
  border-radius: 0px 0px 40px 40px;
  @media screen and (min-width: 1280px) {
    width: 262px;
    height: 298px;
  }
`;

export const ModalCategory = styled.p`
  position: absolute;
  top: 16px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 32px;

  background-color: var(--lightblue);

  font-size: 14px;
  font-weight: 500;
  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;
  @media screen and (min-width: 1280px) {
  }
`;

export const ModalHeader = styled.h2`
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.24px;
  color: #000;

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const ModalInfoList = styled.ul`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 51px;
  }
`;

export const ModalInfoItem = styled.li`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

export const ModalContact = styled.li`
  @media screen and (min-width: 1280px) {
    color: var(--accent-color);
    font-weight: 500;

    a {
      border-bottom: 1px solid var(--accent-color);
    }
  }
`;

export const ModalComments = styled.p`
  @media screen and (min-width: 1280px) {
    color: var(--main-color);
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.64px;
    margin-bottom: 70px;
  }
`;
export const ModalButtons = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 17px;
  }
`;

export const ModalPhone = styled.a`
  @media screen and (min-width: 1280px) {
    display: flex;
    gap: 6px;
    width: 129px;
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
  }
`;

export const ModalButtonAdd = styled.button`
  display: flex;
  gap: 6px;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.isSelected && props.isLoggedIn ? stylesBtnActive.darkblue : stylesBtnActive.white)};
  background: ${props => (props.isSelected && props.isLoggedIn ? stylesBtnActive.lightblue : stylesBtnActive.darkblue)};
  border: none;
  border-radius: 40px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
`;

export const CloseModalButton = styled.button`
  border: transparent;
  background: transparent;
  position: absolute;
  top: 23px;
  right: 26px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const IconHeart = styled.svg`
  stroke: ${props => (props.isSelected && props.isLoggedIn ? stylesBtnActive.darkblue : stylesBtnActive.white)};
  fill: ${props => (props.isSelected && props.isLoggedIn ? stylesBtnActive.darkblue : 'transparent')};
`;

export const IconCross = styled.svg`
  stroke: var(--dark-blue);

  &:hover {
    border: 1px solid var(--dark-blue);
    border-radius: 50%;
  }
`;
