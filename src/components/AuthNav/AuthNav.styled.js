import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import handleFunctions from 'utils/handleText';

export const Nav = styled.nav`
  display: flex;
  flex-direction: ${props => (props.isMobile ? 'column' : 'row')};
  align-items: center;
  margin-bottom: ${props => (props.isMobile ? '40px' : '')};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
`;

export const LoginButton = styled(NavLink)
  .withConfig({
    shouldForwardProp: prop => !['isMobile'].includes(prop),
  })
  .attrs({})`
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
  transition: all ease-in-out 0.2s;
  color: ${({ color }) => handleFunctions.handleColorText(color)};
  &.active{
    background: #888888;
    opacity: 0.7;
    pointer-events: none; 
  }
  &:hover {
    background: var(--main-light-color);
    color: ${({ hovercolor }) => handleFunctions.handleHoverText(hovercolor)};
    fill: ${({ hovercolor }) => handleFunctions.handleHoverText(hovercolor)};
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 20px;
    display: flex;
  }
`;

export const ButtonText = styled.p`
  margin-right: ${props => props.margin || '0px'};
  margin-left: ${props => props.marginL || '0px'};
  font-weight: ${({ weight }) => handleFunctions.handleWeightText(weight)};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`;

export const RegisterButton = styled(NavLink)
  .withConfig({
    shouldForwardProp: prop => !['isMobile'].includes(prop),
  })
  .attrs({})`
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  border-radius: 40px;
  background: transparent;
  border: 2px solid var(--accent-color);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: ${props => (props.isMobile ? '' : '24px')};
  height: 40px;
  width: ${props => (props.isMobile ? '165px' : '142px')};
  color: ${({ color }) => handleFunctions.handleColorText(color)};
  transition: all ease-in-out 0.2s;
  &.active{
    background: #888888;
    opacity: 0.7;
    pointer-events: none; 
    color: var(--main-light-color);
  }
  &:hover {
    background: var(--accent-color);
    color: ${({ hovercolor }) => handleFunctions.handleHoverText(hovercolor)};
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const BurgerButton = styled.button
  .withConfig({
    shouldForwardProp: prop => !['isMobile'].includes(prop),
  })
  .attrs({})`
  cursor: pointer;
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center;
  padding: 0;
  display: ${props => (props.isMobile ? 'none' : 'flex')};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.5);
  }
  &:focus {
    transform: scale(1.5);
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const IconPawPrint = styled.svg`
  fill: currentColor;
`;

export const IconBurger = styled.svg`
  stroke: var(--accent-color);

  &:hover {
    stroke: ${({ hovercolor }) => handleFunctions.handleHoverText(hovercolor)};
  }
`;
