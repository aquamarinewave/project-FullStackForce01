import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AddPet = styled(Link)`
  cursor: pointer;

  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 129px;
  height: 40px;
  padding: 9px 16px;
  border-radius: 40px;
  border: 2px solid var(--dark-blue);
  background: var(--dark-blue);
  color: var(--container-bg);

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;

  &:hover,
  &:focus {
    background: var(--gradient-blue-bg);
    border: none;
  }
`;

export const AddPetSmall = styled(Link)`
  position: fixed;
  z-index: 2;
  bottom: 61px;
  right: 20px;

  background: var(--dark-blue);
  color: var(--container-bg);

  cursor: pointer;

  display: inline-flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;
  padding: 16px;
  border: 2px solid var(--dark-blue);
  border-radius: 50%;

  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover,
  &:focus {
    background: var(--gradient-blue-bg);
    border: none;
  }
`;

export const IconPlusSmall = styled.svg`
  stroke: currentColor;
`;
export const IconPlus = styled.svg`
  stroke: currentColor;
`;
