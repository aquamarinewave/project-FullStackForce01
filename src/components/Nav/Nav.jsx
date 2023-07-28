import { MainNav, Link } from './Nav.styled';

const Nav = ({ isMobile, closeMenu }) => {
  return (
    <MainNav isMobile={isMobile}>
      <Link to="/news" onClick={() => closeMenu()}>
        News
      </Link>
      <Link to="/notices" onClick={() => closeMenu()}>
        Find Pet
      </Link>
      <Link to="/friends" onClick={() => closeMenu()}>
        Our Friends
      </Link>
    </MainNav>
  );
};

export default Nav;
