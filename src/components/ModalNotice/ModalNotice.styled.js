import styled from 'styled-components';

const stylesBtnActive = {
  lightblue: "var(--lightblue)",
  darkblue: "var(--dark-blue)",
  white: "var(--main-light-color)",
};

export const Background = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.60);
  backdrop-filter: blur(4px); 
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalWrapper = styled.div`
  width: 681px;
  height: 540px;
  background: var(--main-light-color);
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-radius: 40px;
`;

export const ModalContent = styled.div`
  padding: 32px;
  width: 681px;

  span {
    display: flex;
  }


`;

export const ModalInfo = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 28px; 
`;

export const ModalImg = styled.div`
  position: relative;
  width: 262px;
  height: 298px;
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
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px; 
  margin-bottom: 20px; 
`;

export const ModalInfoList = styled.div`
  display: flex;
  gap: 51px;
`;

export const ModalInfoItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.64px;
  margin-bottom: 70px   
`;
;

export const ModalButtons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 17px; 
`;


export const ModalPhone = styled.a`
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
    background: var(--dark-blue, linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)); 
    color: var(--main-light-color);
  }
`

export const ModalButtonAdd = styled.button`
  display: flex;
  gap: 6px;
  width: 129px;
  padding: 8px 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.isSelected && props.isLoggedIn ? stylesBtnActive.darkblue : stylesBtnActive.white)};
  background: ${(props) => (props.isSelected && props.isLoggedIn ? stylesBtnActive.lightblue : stylesBtnActive.darkblue)};
  border: none;
  border-radius: 40px; 
  font-size: 16px;
  font-family: inherit;
  font-weight: 700;  
  line-height: normal;
  letter-spacing: 0.64px;  
`

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
  stroke: ${(props) => (props.isSelected && props.isLoggedIn? stylesBtnActive.darkblue : stylesBtnActive.white)};
  fill: ${(props) => (props.isSelected && props.isLoggedIn? stylesBtnActive.darkblue : "transparent")};

`;


export const IconCross = styled.svg`
  stroke: var(--dark-blue);

  &:hover {
    border: 1px solid var(--dark-blue);
    border-radius: 50%;
  }
`;