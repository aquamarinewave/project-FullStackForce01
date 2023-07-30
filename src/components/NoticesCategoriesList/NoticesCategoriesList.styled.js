import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
`;
const Item = styled.li`
  width: 280px;
  padding-bottom: 20px;
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 0px 0px 40px 40px;
  background: var(--main-light-color);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;
export { List, Item };
