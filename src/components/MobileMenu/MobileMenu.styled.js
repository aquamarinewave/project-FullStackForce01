import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import handleFunctions from 'utils/handleText';

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
  background-color: var(--bg-color);
  display: ${props => (props.isOpen ? 'inline' : 'none')};

  @media screen and (min-width: 768px) {
    padding: 24px 32px;
    display: ${props => (props.isOpen ? 'block' : 'none')};
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
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }

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
`;

export const CloseButton = styled.button`
  cursor: pointer;
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all ease-in-out 0.2s;
  &:hover {
    background-color: #c5dff6;
  }
  &:focus {
    transform: scale(1.5);
  }
  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const ButtonText = styled.p`
  margin-right: ${props => props.margin || '0px'};
  margin-left: ${props => props.marginL || '0px'};
  color: ${({ color }) => handleFunctions.handleColorText(color)};
  font-weight: ${({ weight }) => handleFunctions.handleWeightText(weight)};
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
`;

export const IconCross = styled.svg`
  stroke: var(--accent-color);
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
