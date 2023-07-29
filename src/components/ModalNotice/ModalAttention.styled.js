import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 608px;
  height: 429px;
  background: var(--main-light-color);
  color: #000;
  position: relative;
  border-radius: 40px;
  padding: 60px 40px;
  text-align: center;

`;

export const ModalHeader = styled.h3`
  color: #111;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.44px;
  margin-bottom: 40px; 
`;

export const ModalText = styled.p`
  color: #111;
  text-align: center;
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.8px; 
  margin-bottom: 40px; 
`;


export const ModalAuth = styled.div`
position: absolute;
left: 50%;
transform: translate(-50%) scale(1);
`;