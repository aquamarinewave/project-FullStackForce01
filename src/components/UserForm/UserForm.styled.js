import styled from 'styled-components';
export const SubmitBtn = styled.button`
  display: flex;
  width: 232px;
  padding: 6px;
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
  margin-left: 140px;
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
  height: 40px;
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
`;

export const BtnDecline = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 4px;
  background-color: transparent;
`;

export const IconCrossSmall = styled.svg`
  stroke: var(--fail-color);
`;

export const IconCamera = styled.svg`
  stroke: var(--dark-blue);
  cursor: pointer;
  margin-right: 8px;
`;

export const BtnConfirm = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 50%;
  padding: 4px;
  margin-right: 10px;
  background-color: transparent;
`;

export const IconCheck = styled.svg`
  stroke: var(--dark-blue);
`;

export const ApproveText = styled.div``;

export const IconCheckForm = styled.svg`
  stroke: green;
  top: 13px;
  position: absolute;
  right: -200px;
`;

export const IconCheckBirthday = styled.svg`
  stroke: green;
  top: 13px;
  position: absolute;
  right: -180px;
`;
