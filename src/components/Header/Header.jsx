import { useState } from 'react';
import {
  MainHeader,
  // Container
} from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainHeader>
      {/* <Container> */}
        <Logo toggleMenu={toggleMenu} />
        <Navigation toggleMenu={toggleMenu} openMenu={menuOpen} />
      {/* </Container> */}
    </MainHeader>
  );
};

export default Header;
