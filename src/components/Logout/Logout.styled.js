import styled from 'styled-components';
import handleFunctions from 'utils/handleText';

export const Button = styled.button`
  border-radius: 40px;
  background: ${props => (props.isBlue ? 'var(--dark-blue)' : 'transparent')};
  border: ${props => (props.isBorder ? '2px solid var(--dark-blue)' : 'none')};
  cursor: pointer;
  display: ${props => (props.isDisplay ? 'flex' : 'none')};
  height: 40px;
  width: 135px;
  justify-content: center;
  align-items: center;
  flex-direction: ${props => (props.isReversed ? 'row-reverse' : 'row')};
  position: ${props => (props.isMobile ? 'absolute' : '')};
  bottom: ${props => (props.isMobile ? '0' : '')};
  left: ${props => (props.isMobile ? '0' : '')};
  margin-top: ${props => (props.isMarginT ? '24px' : '')};
  margin-left: ${props => (props.isMobile ? '20px' : '')};
  margin-bottom: ${props => (props.isMobile ? '20px' : '')};
  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
    border: transparent;
  }

  @media screen and (min-width: 768px) {
    position: ${props => (props.isMobile ? 'relative' : '')};
    bottom: ${props => (props.isMobile ? '' : '')};
    left: ${props => (props.isMobile ? '' : '')};
    margin-left: ${props => (props.isMobile ? '0px' : '')};
    margin-top: ${props => (props.isMarginT ? '14px' : '')};
    margin-bottom: ${props => (props.isMobile ? '0px' : '')};
    height: 44px;
    display: ${props => (props.isMobile ? 'flex' : 'none')};
    display: ${props => (props.isDisplay ? 'flex' : 'none')};
  }

  @media screen and (min-width: 1280px) {
    margin-top: ${props => (props.isMarginT ? '22px' : '')};
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    margin-right: 20px;
  }
`;

export const IconLogout = styled.svg`
  stroke: ${props => (props.isWhite ? 'var(--bg-color)' : 'var(--dark-blue)')};
`;

export const ButtonText = styled.p
  .withConfig({
    shouldForwardProp: prop => !['spacing', 'isRequest', 'isBold', 'isGrey', 'marginL', 'isRequest'].includes(prop),
  })
  .attrs({})`
  font-size: ${props => (props.isRequest ? '24px' : '16px')};
  margin-right: ${props => props.margin || '0px'};
  margin-left: ${props => props.marginL || '0px'};
  color: ${props => (props.isGrey ? '#888888' : 'var(--bg-color)')};
  font-weight: ${props => (props.isBold ? '700' : '500')};
  letter-spacing: ${props => (props.spacing ? '0.96px' : '0.64px')};
  font-style: normal;
  line-height: normal;
  font-family: Manrope;
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.isRequest ? '36px' : '16px')};
    letter-spacing: ${props => (props.spacing ? '1.44px' : '0.64px')};
  }
`;
export const ModalText = styled.p
  .withConfig({
    shouldForwardProp: prop => !['spacing', 'marginL', 'isLogout', 'isRequest'].includes(prop),
  })
  .attrs({})`
  font-size: ${props => (props.isRequest ? '24px' : '16px')};
  margin-right: ${props => props.margin || '0px'};
  margin-left: ${props => props.marginL || '0px'};
  color: ${({ color }) => handleFunctions.handleColorText(color)};
  font-weight: ${({ weight }) => handleFunctions.handleWeightText(weight)};
  letter-spacing: ${props => (props.spacing ? '0.96px' : '0.64px')};
  font-style: normal;
  line-height: normal;
  font-family: Manrope;
  margin-top: ${props => (props.isLogout ? '41px' : '')};
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.isRequest ? '36px' : '16px')};
    letter-spacing: ${props => (props.spacing ? '1.44px' : '0.64px')};
    margin-top: ${props => (props.isLogout ? '60px' : '')};
  }
`;
