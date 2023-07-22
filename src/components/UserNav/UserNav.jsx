import styled from 'styled-components';

const UserNav = styled.nav`
  display: none;
 
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    ${'' /* margin-left: 80px; */}
  }
`;
export default UserNav;