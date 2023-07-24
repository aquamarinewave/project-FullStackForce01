import styled from 'styled-components';

const NoticesItemThumb = styled.div`
  position: relative;
`;

const CategoriesContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightblue);
  height: 36px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  top: 34px;
`;

const Category = styled.span``;

export { NoticesItemThumb, Category, CategoriesContainer };
