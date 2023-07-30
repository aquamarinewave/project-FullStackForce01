import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }

`;

export const LoginButton = styled(NavLink)`
  border-radius: 40px;
  background: var(--accent-color);
  cursor: pointer;
  display: flex;
  height: 40px;
  width: 240px;
  align-items: center;
  justify-content: center;
  transition: all ease-in-out 0.2s;
  color: var(--bg-color);
  margin-bottom: 12px;

  &:hover {
    background: var(--main-light-color);
    color: var(--accent-color);
    fill: var(--accent-color);
    border: 2px solid var(--accent-color);
  }

  @media screen and (min-width: 768px) {
    width: 165px;
    margin-bottom: 0;
  }

`;

export const ButtonText = styled.p`
  margin-right: 8px;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.64px;
`;

export const RegisterButton = styled(NavLink)`
  display: flex;
  border-radius: 40px;
  background: transparent;
  border: 2px solid var(--accent-color);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  width: 240px;
  color: var(--accent-color);
  transition: all ease-in-out 0.2s;

  &:hover {
    background: var(--accent-color);
    color: var(--bg-color);
  }

  @media screen and (min-width: 768px) {
    width: 165px;
  }

`;

export const IconPawPrint = styled.svg`
  fill: currentColor;
`;

