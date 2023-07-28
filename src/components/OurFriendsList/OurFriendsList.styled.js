import styled from 'styled-components';

const Wrapper = styled.ul`
  liststyle: none;
  width: 280px;
  padding-bottom: 75px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    width: 704px;
  }
  @media screen and (min-width: 1280px) {
    width: 1250px;
    padding-bottom: 69px;
  }
`;

export {Wrapper}