import styled from 'styled-components';

export const LogOutBtn = styled.button`
  display: flex;
  position: absolute;
  background-color: transparent;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border: none;
  bottom: 20px;
  left: 16px;
`;
export const IconLogOut = styled.svg`
  stroke: #54adff;
  margin-right: 12px;
`;

export const LogOutBtnText = styled.span`
  color: var(--c, #888);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
`;
