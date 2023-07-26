import { MainNav, Link } from "./Nav.styled"

const Nav = ({isMobile}) => {
  return (
      <MainNav isMobile={isMobile}>
        <Link to="/news">News</Link>
        <Link to="/notices">Find Pet</Link>
        <Link to="/friends">Our Friends</Link>
      </MainNav>
  );
};

export default Nav;