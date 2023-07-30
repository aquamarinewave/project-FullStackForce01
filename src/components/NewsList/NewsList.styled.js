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

  margin-bottom: 44px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 20px;
  background: var(--main-light-color);
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
    width: 336px;
    margin: 16px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 394px;
  }
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    width: 100%;
    height: 8px;

    border-radius: 40px;
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
    @media screen and (min-width: 768px) {
      top: -22px;
    }
  }
`;
export { List, Item };
