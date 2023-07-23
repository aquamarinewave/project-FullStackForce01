import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const LoginButton = styled.button`
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
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px ;
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    width: 165px;
    ${'' /* margin-top: 20px; */}
    ${'' /* padding-top: 4px; */}
    padding-right:20px;
    padding-left: 20px;
    display: flex;
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

export const MButtonText = styled.p`
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

export const RegisterButton = styled.button`
  display: none;
  border-radius: 40px;
  border: 2px solid var(--accent-color);
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    ${
      '' /* max-width: 768px;
    padding-left: 32px;
    padding-right: 32px; */
    }
    margin-right: 24px;
    height: 40px;
    width: 142px;
    ${'' /* margin-top: 24px; */}
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    width: 142px;
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