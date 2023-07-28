import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 40px;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  cursor: pointer;
  display: ${props => (props.isMobile ? 'flex' : 'none')};
  height: 40px;
  width: 135px;
  justify-content: center;
  align-items: center;
  position: ${props => (props.isMobile ? 'absolute' : '')};
  bottom: ${props => (props.isMobile ? '0' : '')};
  left: ${props => (props.isMobile ? '0' : '')};
  margin-left: ${props => (props.isMobile ? '20px' : '')};
  margin-bottom: ${props => (props.isMobile ? '20px' : '')};

  @media screen and (min-width: 768px) {
    position: ${props => (props.isMobile ? 'relative' : '')};
    bottom: ${props => (props.isMobile ? '' : '')};
    left: ${props => (props.isMobile ? '' : '')};
    margin-left: ${props => (props.isMobile ? '0px' : '')};
    margin-bottom: ${props => (props.isMobile ? '0px' : '')};
    height: 44px;
    display: ${props => (props.isMobile ? 'flex' : 'none')};
  }

  @media screen and (min-width: 1280px) {
    padding-right: 20px;
    padding-left: 20px;
    display: flex;

    margin-right: 20px;
  }
`;

export const IconLogout = styled.svg`
  stroke: ${props => (props.isBlue ? 'var(--dark-blue)' : 'var(--bg-color)')};
  &:hover {
    ${'' /* fill: green; */}
  }
`;

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
  color: ${props => (props.isGrey ? '#888888' : 'var(--bg-color)')};
  font-weight: ${({ weight }) => handleWeightText(weight)};

  @media screen and (min-width: 768px) {
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.64px;
  }
`;
