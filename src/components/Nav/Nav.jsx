import { MainNav, Link } from './Nav.styled';

const Nav = ({ isMobile, closeMenu }) => {
  return (
    <MainNav isMobile={isMobile}>
      <Link to="/news" activeClassName="active" onClick={() => closeMenu()}>
        News
      </Link>
      <Link to="/notices" activeClassName="active" onClick={() => closeMenu()}>
        Find Pet
      </Link>
      <Link to="/friends" activeClassName="active" onClick={() => closeMenu()}>
        Our Friends
      </Link>
    </MainNav>
  );
};

export default Nav;
