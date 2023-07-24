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
  padding: 10px 16px;
  height: 36px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  top: 17px;
`;

const CategoriesName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const DiscriptionList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export { NoticesItemThumb, CategoriesName, CategoriesContainer, DiscriptionList };
