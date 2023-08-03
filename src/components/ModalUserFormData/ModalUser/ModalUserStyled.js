import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1200;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 280px;
  height: 517px;
  padding: 20px 0 21px;
  border-radius: 20px;
  background-color: var(--main-light-color);

  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 268px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 520px;
  }
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
    background-color: var(--lightblue);
  }
  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const CrossIcon = styled.svg`
  stroke: var(--dark-blue);
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
    background: var(--gradient-blue-bg);

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
    background: var(--gradient-blue-bg);
  }
  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const BtnText = styled.span`
  margin-right: 8px;
`;

export const TrashIcon = styled.svg`
  stroke: var(--bg-color);
`;
