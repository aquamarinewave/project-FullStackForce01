import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AddPet = styled(Link)`
  border-radius: 40px;
  background: var(--dark-blue);
  border: 2px solid var(--dark-blue);
  color: var(--container-bg);
  cursor: pointer;
  display: inline-flex;
  width: 129px;
  height: 40px;
  padding: 9px 16px;
  align-items: center;

  gap: 8px;

  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;

  /* letter-spacing: 0.64px; */

  &:hover,
  &:focus {
    background: var(--gradient-blue-bg);
  }
`;
export const IconPlusSmall = styled.svg`
  stroke: currentColor;
`;
