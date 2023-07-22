import styled from 'styled-components';
import Icon from 'utils/Icon/Icon';

export const Backdrop = styled.div`
  position: relative;
  display: block;
  width: 100vw;
  height: 100vh;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 280px;

  padding: 60px 0;
  border-radius: 40px;
  background-color: #fff;

  transform: translate(-50%, -50%);
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
`;

export const CancelBtn = styled.button`
  display: inline-block;

  width: 100%;
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
`;

export const ApproveBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 9px 0;
  border-radius: 40px;
  border: 2px solid var(--dark-blue);
  background-color: var(--dark-blue);

  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
`;

export const TrashIcon = styled(Icon)`
  margin-left: 80px;
`;
