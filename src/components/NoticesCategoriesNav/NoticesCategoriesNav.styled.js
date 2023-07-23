import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoriesNavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 170px;
`;

const CategoriesLink = styled(NavLink)`
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 40px;
  color: var(--dark-blue);
  background-color: var(--lightblue);
  &.active {
    color: var(--bg-color);
    background-color: var(--dark-blue);
  }
`;

export { CategoriesNavContainer, CategoriesLink };
