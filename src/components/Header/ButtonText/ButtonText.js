import styled from 'styled-components';

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
}

const handleWeightText = weight => {
  switch (weight) {
    case 'usual':
      return '500';
    case 'semi-bold':
      return '600';
    case 'bold':
      return '700';
    default:
      return "500"
  }
}
const MButtonText = styled.p`
  @media screen and (min-width: 768px) {
    color: ${({ color }) => handleColorText(color)};
    margin-right: ${props => props.margin || '0px'};
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: ${({ weight }) => handleWeightText(weight)};
    line-height: normal;
    letter-spacing: 0.64px;
    ${'' /* padding-right: 8px; */}
  }
  @media screen and (min-width: 1280px) {
    color: ${({ color }) => handleColorText(color)};
    margin-right: ${props => props.margin || '0px'};
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: ${({ weight }) => handleWeightText(weight)};
    line-height: normal;
    letter-spacing: 0.64px;
    ${'' /* padding-right: 8px; */}
  }
`;

export default MButtonText;