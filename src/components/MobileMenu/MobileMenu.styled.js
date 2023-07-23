import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MenuM = styled.div`
  display: flex;
  ${
    '' /* 
display: block;
  @media screen and (min-width: 768px) {
display: block;
  }

  @media screen and (min-width: 1280px) { */
  }
  ${'' /* display: none; */}
    ${
    '' /* width: 500px;
    height: 200px;
  } */
  }
`;

export default MenuM;

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

export const CloseButton = styled.button`
  cursor: pointer;
  color: white;
  border: transparent;
  background: white;
  display: flex;
  align-items: center;
  padding: 0;
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
  letter-spacing: 0.64px;
  font-size: 16px;
`;

export const TopMenu = styled.div`
  display: flex;
  ${'' /* align-items: space-between; */}
  ${
    '' /* 
display: block;
  @media screen and (min-width: 768px) {
display: block;
  }

  @media screen and (min-width: 1280px) { */
  }
    ${'' /* display: none; */}
    ${
    '' /* width: 500px;
    height: 200px;
  } */
  }
`;
