import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    margin: -16px -16px;
  }
  @media screen and (min-width: 1280px) {
  }
`;
const Item = styled.li`
  position: relative;

  width: 280px;
  height: 456px;

  padding-bottom: 20px;
  margin-bottom: 24px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 0px 0px 40px 40px;
  background: var(--main-light-color);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 16px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
  }
`;
export { List, Item };
