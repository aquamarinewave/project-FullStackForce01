import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  align-items: center;
  margin-bottom: ${props => (props.isMobile ? '40px' : '')};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0px;
    display: flex;
  }
`;

export const LoginButton = styled(NavLink)`
  border-radius: 40px;
  border: 2px solid var(--accent-color);
  background: var(--accent-color);
  cursor: pointer;
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  height: 40px;
  width: 165px;
  padding-right: 20px;
  padding-left: 20px;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.isMobile ? '' : '20px')};
  margin-bottom: ${props => (props.isMobile ? '12px' : '')};
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 20px;
    display: flex;
  }
`;

const handleColorText = color => {
  switch (color) {
    case 'login':
      return '#fef9f9';
    case 'register':
      return 'var(--accent-color)';
    case 'logout':
      return '#fef9f9';
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

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.64px;
 
  }
`;

export const RegisterButton = styled(NavLink)`
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  border-radius: 40px;
  background: transparent;
  border: 2px solid var(--accent-color);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: ${props => (props.isMobile ? '' : '24px')};
  height: 40px;
  ${'' /* width: 142px; */}
  width: ${props => (props.isMobile ? '165px' : '142px')};
  

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const BurgerButton = styled.button`
  cursor: pointer;
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0;
  display: ${props => (props.isMobile ? 'none' : 'flex')};
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const IconPawPrint = styled.svg`
  fill: var(--main-light-color);

  &:hover {
    ${'' /* fill: green; */}
  }
`;

export const IconBurger = styled.svg`
  stroke: #ffc107;

  &:hover {
    ${'' /* fill: green; */}
  }
`;
