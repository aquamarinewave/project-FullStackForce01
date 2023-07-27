import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled(NavLink)`
  border-radius: 40px;
  border: 2px solid var(--accent-color);
  background: var(--accent-color);
  cursor: pointer;
  display: none;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 165px;
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
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
  display: none;
  border-radius: 40px;
  background: var(--main-light-color);
  border: 2px solid var(--accent-color);
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
   margin-right: 24px;
    height: 40px;
    width: 142px;
    display: flex;
    align-items: center;
  }
`;

export const BurgerButton = styled.button`
  cursor: pointer;
  color: var(--main-light-color);
  border: transparent;
  background: var(--main-light-color);
  display: flex;
  align-items: center;
  padding: 0;
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
