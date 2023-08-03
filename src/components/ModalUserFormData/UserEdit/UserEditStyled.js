import styled from 'styled-components';

export const EditButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;

  cursor: pointer;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;

  &:hover {
    background-color: var(--lightblue);
  }
`;

export const IconEdit = styled.svg`
  fill: var(--dark-blue);
`;
