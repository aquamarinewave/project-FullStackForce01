import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import handleFunctions from 'utils/handleText';

export const Nav = styled.nav`
  display: flex;
  @media screen and (min-width: 1280px) {
    right: 0;
    align-items: center;
    margin-left: 80px;
  }
`;

export const ButtonText = styled.p`
  margin-right: ${props => props.margin || '0px'};
  margin-left: ${props => props.marginL || '0px'};
  color: ${({ color }) => handleFunctions.handleColorText(color)};
  font-weight: ${({ weight }) => handleFunctions.handleWeightText(weight)};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`;

export const UserButton = styled(NavLink)`
  background: transparent;
  border-radius: 20px;
  border: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 8px;
  padding: 0;
  height: 40px;
  display: flex;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }

  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 113px;
  }
`;

export const BurgerButton = styled.button`
  cursor: pointer;
  color: transparent;
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
`;

export const IconLogout = styled.svg`
  stroke: var(--bg-color);
`;

export const IconUser = styled.svg`
  stroke: var(--accent-color);
`;

export const IconBurger = styled.svg`
  stroke: #ffc107;
`;
