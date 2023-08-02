import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  z-index: 9999;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 280px;

  border-radius: 20px;
  background-color: var(--main-light-color);

  padding-top: 60px;
  padding-right: 0px;
  padding-bottom: ${props => (props.isLogout ? '60px' : '60px')};
  padding-left: 0px;

  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-right: 0px;
    padding-left: 0px;
    padding-bottom: ${props => (props.isLogout ? '109px' : '60px')};
    min-width: 608px;
    border-radius: 40px;
  }
`;

export const CrossIcon = styled.svg`
  stroke: var(--dark-blue);
`;

export const CloseIcon = styled.div`
  position: absolute;
  display: flex;
  top: 4px;
  right: 4px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #c5dff6;
  }
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 44px 12px 0 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const CancelBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;
  padding: 9px 0;
  margin-bottom: 8px;
  border-radius: 40px;
  border: 2px solid var(--dark-blue);
  background-color: inherit;

  color: var(--dark-blue);
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  cursor: pointer;

  &:hover {
    color: white;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    margin-bottom: 0;
    margin-right: 17px;
  }
`;

export const ApproveBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;
  padding: 9px 0;
  border-radius: 40px;
  border: none;
  background-color: var(--dark-blue);

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;

  cursor: pointer;

  &:hover {
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }
  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const BtnText = styled.span`
  margin-right: 8px;
`;

export const BtnIcon = styled.svg`
  stroke: ${({ btnIconStroke }) => btnIconStroke};
  fill: ${({ btnIconColor }) => btnIconColor};
`;
