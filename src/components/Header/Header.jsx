import { MainHeader } from './Header.styled';
import Navigation from 'components/Navigation/Navigation';
import Logo from 'components/Logo/Logo';

const Header = () => {
  return (
    <MainHeader>
      <Logo />
      <Navigation  />
    </MainHeader>
  );
};

export default Header;
