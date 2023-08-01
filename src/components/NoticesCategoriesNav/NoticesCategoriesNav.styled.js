import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CategoriesNavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 200px;
  margin-bottom: 24px;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 320px;
    height: 82px;
    gap: 12px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1280px) {
    height: auto;
    width: 520px;
    margin-bottom: 42px;
  }
`;

const CategoriesLink = styled(NavLink)`
  height: 35px;
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
