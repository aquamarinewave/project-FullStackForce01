import { MainNav, Link } from './Nav.styled';

const Nav = ({ isMobile, closeMenu }) => {

  return isMobile ? (
    <MainNav isMobile={isMobile}>
      <Link to="/news" activeclassname="active" onClick={() => closeMenu()}>
        News
      </Link>
      <Link to="/notices" activeclassname="active" onClick={() => closeMenu()}>
        Find Pet
      </Link>
      <Link to="/friends" activeclassname="active" onClick={() => closeMenu()}>
        Our Friends
      </Link>
    </MainNav>
  ) : (
    <MainNav isMobile={isMobile}>
      <Link to="/news" activeclassname="active">
        News
      </Link>
      <Link to="/notices" activeclassname="active">
        Find Pet
      </Link>
      <Link to="/friends" activeclassname="active">
        Our Friends
      </Link>
    </MainNav>
  );
};

export default Nav;
