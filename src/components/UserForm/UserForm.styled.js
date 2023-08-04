import styled from 'styled-components';

export const SubmitBtn = styled.button`
  display: flex;
  width: 248px;
  padding: 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;
  background: var(--dark-blue);

  cursor: pointer;

  border: none;
  color: var(--bg-color);

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  right: 50px;
  position: relative;
  right: 68px;
  top: 13px;

  :disabled {
    opacity: 0.4;
  }
  margin-left: 140px;

  &:hover,
  &:focus {
    background: var(--gradient-blue-bg);
  }

  @media screen and (min-width: 768px) {
    position: absolute;

    width: 255px;
    right: 341px;
    top: 210px;
    height: 32px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    width: 255px;
    right: 26px;
    top: -1px;
    height: 32px;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const ErrorMassege = styled.div`
  position: absolute;
  top: -11px;
  left: 159px;
  color: red;
  font-size: 9px;
`;
export const ApprovedMassege = styled.div`
  position: absolute;
  top: -11px;
  left: 159px;
  color: green;
  font-size: 9px;
`;

export const EditButton = styled.label`
  position: relative;
  display: inline-block;
  @media screen and (min-width: 768px) {
    left: 64px;
  }
  @media screen and (min-width: 1280px) {
    left: 107px;
  }
`;

export const EditText = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  font-size: 12px;
  vertical-align: middle;
  color: #111;
  text-align: center;

  line-height: 28px;
  // height: 40px;
`;

export const InputWrapper = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0;
  height: 0;
`;

export const ApproveContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 117px;
  }
  @media screen and (min-width: 1280px) {
    position: relative;
    right: -107px;
  }
`;

export const BtnDecline = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 4px;
  margin-left: 10px;
  background-color: transparent;
  &:hover {
    background-color: var(--lightblue);
  }
`;

export const IconCrossSmall = styled.svg`
  stroke: var(--fail-color);
`;

export const IconCamera = styled.svg`
  stroke: var(--dark-blue);
  cursor: pointer;
  margin-right: 8px;
`;

export const IconCameraBtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 2px 5px;
  &:hover {
    background-color: var(--lightblue);
  }
`;

export const BtnConfirm = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 4px;
  margin-right: 10px;
  background-color: transparent;
  &:hover {
    background-color: var(--lightblue);
  }
`;

export const IconCheck = styled.svg`
  stroke: var(--dark-blue);
`;

export const ApproveText = styled.div``;

export const IconCheckForm = styled.svg`
  stroke: green;
  top: 13px;
  position: absolute;
  right: -90px;
  @media screen and (min-width: 768px) {
    right: -199px;
  }
  @media screen and (min-width: 1280px) {
    right: -200px;
  }
`;

export const IconCheckBirthday = styled.svg`
  stroke: green;
  top: 13px;
  position: absolute;
  right: -71px;
  @media screen and (min-width: 768px) {
    right: -177px;
  }
  @media screen and (min-width: 1280px) {
    right: -180px;
  }
`;

export const WrapperModalCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;

    margin-right: 160px;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgAvatarForm = styled.img`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 40px;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    margin-left: 71px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 107px;
  }
`;
