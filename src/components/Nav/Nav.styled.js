import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: 80px;
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



