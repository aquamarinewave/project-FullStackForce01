import styled from 'styled-components';

const Nav = styled.nav`
display: none;
  @media screen and (min-width: 768px) {
    display: none;    
  }
  @media screen and (min-width: 1280px) {
    display: block;
    margin-left: 80px;
  }
`;
export default Nav;
