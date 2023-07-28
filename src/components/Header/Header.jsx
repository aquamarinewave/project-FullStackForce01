import { useState } from 'react';
import { MainHeader } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <MainHeader>
      <Logo closeMenu={closeMenu} />
      <Navigation toggleMenu={toggleMenu} openMenu={menuOpen} closeMenu={closeMenu} />
    </MainHeader>
  );
};

export default Header;
