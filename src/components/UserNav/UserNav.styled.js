import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;

  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    ${'' /* margin-left: 80px; */}
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
    ${'' /* padding-right: 8px; */}
  }
  @media screen and (min-width: 1280px) {
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.64px;
    ${'' /* padding-right: 8px; */}
  }
`;

export const UserButton = styled.button`
  background: #ffffff;
  border-radius: 20px;
  border: transparent;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 8px;
  padding: 0;

  @media screen and (min-width: 768px) {
    ${
      '' /* max-width: 768px;
    padding-left: 32px;
    padding-right: 32px; */
    }

    height: 40px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 44px;
    width: 113px;
    display: flex;
    align-items: center;
  }
`;

export const BurgerButton = styled.button`
  cursor: pointer;
  color: white;
  border: transparent;
  background: white;
  display: flex;
  align-items: center;
  padding: 0;
`;