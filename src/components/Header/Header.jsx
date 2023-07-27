import { useState } from 'react';
import { MainHeader } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <MainHeader>
      <Logo toggleMenu={toggleMenu} />
      <Navigation toggleMenu={toggleMenu} openMenu={menuOpen} />
    </MainHeader>
  );
};

export default Header;
