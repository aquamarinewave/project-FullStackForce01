import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  position: fixed;
  z-index: 100;
  display: block;
  box-sizing: border-box;

  min-width: 320px;
  max-width: 100%;
  width: 100%;
  height: 100vh;
  padding: 20px;
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

export const UserButton = styled(NavLink)`
  background: transparent;
  border-radius: 20px;
  border: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 84px;
  display: flex;

  @media screen and (min-width: 768px) {
    height: 40px;
  }

  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 113px;
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
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
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
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 92px;
  }
`;

export const IconLogout = styled.svg`
  stroke: var(--bg-color);
  &:hover {
    ${'' /* fill: green; */}
  }
`;

export const IconCross = styled.svg`
  stroke: var(--accent-color);

  &:hover {
    ${'' /* fill: green; */}
  }
`;

export const Container = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;
