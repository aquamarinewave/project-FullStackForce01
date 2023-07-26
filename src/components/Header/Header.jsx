import { useEffect, useState } from 'react';
import {
  MainHeader, Container,
  // UserNavContainer
} from './Header.styled';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
// import UserNav from 'components/UserNav/UserNav'
import MobileMenu from '../MobileMenu/MobileMenu';

// const isAuth = () => {
// };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth < 1280);
  
  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainHeader>
      <Container>
        <Logo toggleMenu={toggleMenu} />
        <Nav isMobile={false} />
      </Container>
      {/* {!isAuth ? ( */}
      <div>
        <AuthNav toggleMenu={toggleMenu} />
      </div>
      {/* ) : ( */}
      {/* <UserNavContainer>
        <UserNav />
      </UserNavContainer> */}
      {/* )} */}
      {isTabletOrMobile && <MobileMenu toggleMenu={toggleMenu} openMenu={menuOpen} />}
    </MainHeader>
  );
};

export default Header;
