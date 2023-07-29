import styled from 'styled-components';
export const SubmitBtn = styled.button`
  display: flex;
  width: 255px;
  padding: 6px 108px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  background: var(--unnamed, #54adff);
  cursor: pointer;
  border: none;
  color: var(--unnamed, #fef9f9);
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  :disabled {
    opacity: 0.4;
  }
`;

export const Container = styled.div`
  height: 45px;
  position: relative;
`;

export const ErrorMassege = styled.div`
  position: absolute;
  bottom: 3px;
  left: 15px;
  font-size: 10px;
  line-height: 1.16;
  top: 30px;
  right: 230px;

  /* @media screen and (min-width: 768px) {
    font-size: 12px;
    bottom: 0;
    position: absolute;
  } */
`;
