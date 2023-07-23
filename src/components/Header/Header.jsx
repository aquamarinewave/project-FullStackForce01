import {
  MainHeader, Container,
  // UserNavContainer
} from './Header.styled';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
// import UserNav from 'components/UserNav/UserNav';
//testing mobile menu
// import Mobi from '../MobileMenu/MobileMenu';
// import Mob from 'components/MobileMenu/Mob';

// const isAuth = () => {
// };

// const isTabletOrMobile = window.screen.width < 1279;

const Header = () => {
  return (
    <MainHeader>
      {/* {isTabletOrMobile && <Mobi />} */}
      <Container>
        <Logo />
        <Nav />
      </Container>
      {/* {!isAuth ? ( */}
      <div>
        <AuthNav/>
      </div>
      {/* ) : ( */}
      {/* <UserNavContainer>
        <UserNav />
      </UserNavContainer> */}
      {/* )} */}
    </MainHeader>
  );
};

export default Header;
