import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  gap: 12px;
  justify-content: center;
  background-color: var(--dark-blue);
  border: none;
  border-radius: 40px;
  padding: 8px 28px;
  text-align: center;
  align-content: center;
  align-items: center;
  color: #fef9f9;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  & span {
    margin: auto 0;
    text-align: center;
  }

  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #fef9f9;
    color: var(--dark-blue);
  }
  &:last-child {
    background-color: transparent;
    color: var(--dark-blue);
    text-align: center;
    align-content: center;
    align-items: center;
  }
  &:last-child:hover {
    background-color: var(--dark-blue);
    color: #fef9f9;
  }
`;
