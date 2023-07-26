import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNav = styled.nav`
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: ${props => (props.isMobile ? 'flex' : 'none')};
  }
  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: 80px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.28px;
  &:active {
    color: var(--accent-color);
  }
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.92px;
    color: var(--main-color);
    ${'' /* margin-right: 40px; */}
    ${
      '' /* &:last-child {
      margin-right: 0px;
    } */
    }
    margin-bottom: 60px;
    &:last-child {
      margin-bottom: 0px;
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
    &:last-child {
      margin-right: 0px;
    }
  }
`;



