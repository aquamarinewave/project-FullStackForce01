import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 40px;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  cursor: pointer;
 // not for mobile menu
    ${'' /* display:none; */}
  }

   display: ${props => (props.isMobile ? 'flex' : 'none')};

  display: none;

  @media screen and (min-width: 768px) {
    height: 44px;
    height: 40px;
    width: 135px;
    justify-content: center;
    ${'' /* margin-top: 24px; */}
    //mobile
   ${'' /* display: flex; */}
    align-items: center; 
    
 display: ${props => (props.isMobile ? 'flex' : 'none')};
   // not for mobile menu
    ${'' /* display:none; */}
  }

  @media screen and (min-width: 1280px) {
    height: 40px;
    width: 135px;
    ${'' /* margin-top: 20px; */}
    ${'' /* padding-top: 4px; */}
    padding-right:20px;
    padding-left: 20px;
    display: flex;
    justify-content: center;
    margin-right: 20px;
    align-items: center;
     ${'' /* display: ${props => (props.isMobile ? 'flex' : 'none')}; */}
  }
`;

export const IconLogout = styled.svg`
  stroke: var(--bg-color);
  &:hover {
    ${'' /* fill: green; */}
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
