import styled from 'styled-components';

const Wrapper = styled.ul`
  liststyle: none;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 28px;
    ${'' /* width: 700px; */}
  }

  @media screen and (min-width: 1280px) {
    width: 1248px;
  }
`;

export {Wrapper}