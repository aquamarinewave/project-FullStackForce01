import styled from 'styled-components';

export const RadioButton = styled.label`
  display: inline-block;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;
  border-radius: 40px;
  padding: 8px 16px;
  margin-right: 10px;
  background-color: ${props => (props.checked ? 'var(--dark-blue)' : 'var(--lightblue)')};
  color: ${props => (props.checked ? '#fef9f9' : 'var(--dark-blue)')};
  cursor: pointer;
  width: fit-content;

  input {
    display: none;
  }

  input:checked + span {
    color: #fef9f9;
  }
`;
