import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Test = styled.div`
  position: fixed;
  z-index: 100;
  display: block;
  box-sizing: border-box;

  min-width: 320px;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  padding: 20px;

  overflow-y: hidden;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fef9f9;
  display: ${props => (props.isOpen ? 'inline' : 'none')};

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 20px 16px;
  }
`;

export const Menu = styled.div`
${'' /* padding-top: 76px; */}
  ${
    '' /* display: flex;
  display: block; */
  }
  min-height: 100vh; 
  width: 100%;
  display: ${props => (props.isOpen ? 'inline' : 'none')};
  z-index: 15;

  @media screen and (min-width: 768px) {
    ${'' /* display: fixed; */}
    ${'' /* margin-top: 26px; */}
    display: ${props => (props.isOpen ? 'block' : 'none')};
    z-index: 15;
    position: absolute;
   bottom: 0;
    background: var(--container-bg);
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

  ${
    '' /* width: 500px;
    height: 200px;
  } */
  }
`;

export const Link = styled(NavLink)`
  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.92px;
    color: var(--main-color);
    margin-right: 40px;
    &:active {
      color: var(--accent-color);
    }
    &:last-child {
      margin-right: 0px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-family: Manrope;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.8px;
    color: var(--main-color);
    margin-right: 40px;
    &:active {
      color: var(--accent-color);
    }
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const UserButton = styled.button`
  background: var(--main-light-color);
  border-radius: 20px;
  border: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 8px;
  padding: 0;

  @media screen and (min-width: 768px) {
    ${
      '' /* max-width: 768px;
    padding-left: 32px;
    padding-right: 32px; */
    }

    height: 40px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 113px;
    display: flex;
    align-items: center;
  }
`;

export const IconUser = styled.svg`
  stroke: var(--accent-color);

  &:hover {
    ${'' /* fill: green; */}
  }
`;
export const CloseButton = styled.button`
  cursor: pointer;
  color: var(--main-light-color);
  border: transparent;
  background: var(--main-light-color);
  display: flex;
  align-items: center;
  padding: 0;
`;
const handleColorText = color => {
  switch (color) {
    case 'login':
      return 'var(--bg-color)';
    case 'register':
      return 'var(--accent-color)';
    case 'logout':
      return 'var(--bg-color)';
    case 'name':
      return 'var(--accent-color)';
    default:
      return 'var(--main-color)';
  }
};

const handleWeightText = weight => {
  switch (weight) {
    case 'usual':
      return '500';
    case 'semi-bold':
      return '600';
    case 'bold':
      return '700';
    default:
      return '500';
  }
};

export const ButtonText = styled.p`
  margin-right: ${props => props.margin || '0px'};
  margin-left: ${props => props.marginL || '0px'};
  color: ${({ color }) => handleColorText(color)};
  font-weight: ${({ weight }) => handleWeightText(weight)};
  letter-spacing: 0.64px;
  font-size: 16px;
`;

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 92px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const IconLogout = styled.svg`
  stroke: var(--bg-color);
  &:hover {
    ${'' /* fill: green; */}
  }
`;

export const IconCross = styled.svg`
margin-bottom: 38px;
stroke: var(--accent-color);

  &:hover {
    ${'' /* fill: green; */}
  }
  @media screen and (min-width: 768px) {
   
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const LoginButton = styled.button`
  border-radius: 40px;
  border: 2px solid var(--accent-color);
  background: var(--accent-color);
  cursor: pointer;
  ${'' /* display: none; */}
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  margin-bottom: 12px;
  width: 165px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    ${'' /* margin-top: 24px; */}
    margin-right: 20px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    ${'' /* margin-top: 20px; */}
    ${'' /* padding-top: 4px; */}
    padding-right:20px;
    padding-left: 20px;
    margin-right: 20px;
  }
`;

export const RegisterButton = styled.button`
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  border-radius: 40px;
  background: var(--main-light-color);
  border: 2px solid var(--accent-color);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  width: 165px;

  @media screen and (min-width: 768px) {
    ${
      '' /* max-width: 768px;
    padding-left: 32px;
    padding-right: 32px; */
    }
    margin-right: 24px;
    width: 142px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

export const IconPawPrint = styled.svg`
  fill: var(--main-light-color);

  &:hover {
    ${'' /* fill: green; */}
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 82px;
  
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const ButtonContainer = styled.div`
display:flex;
flex-direction: column-reverse;
align-items: flex-end; 

@media screen and (min-width: 768px) {
  display: flex;}
`;