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
  margin-left: 116px;
`;

export const Container = styled.div`
  /* height: 45px;
  position: relative; */
`;

export const ErrorMassege = styled.div`
  /* position: absolute;
  bottom: 3px;
  left: 15px;
  font-size: 10px;
  line-height: 1.16;
  top: 30px;
  right: 230px; */
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
  font-size: 14px;
  vertical-align: middle;
  color: rgb(255 255 255);
  text-align: center;
  border-radius: 4px;
  background-color: #419152;
  line-height: 22px;
  height: 40px;
  padding: 10px 20px;
  box-sizing: border-box;
  border: none;
  margin: 0;
  transition: background-color 0.2s;
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
