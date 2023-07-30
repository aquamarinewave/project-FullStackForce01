import { MainNav, Link } from './Nav.styled';

const Nav = ({ isMobile, closeMenu }) => {
  return (
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
  );
};

export default Nav;
