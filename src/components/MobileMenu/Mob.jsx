import MobileMenu from './MobileMenu';
import LogoSmall from '../Logo/Logo';
import Nav from '../Nav/Nav';
import MenuLink from '../Header/MenuLink/MenuLink';

const Mob = () => {
    return (
      <MobileMenu>
        <LogoSmall />
        <Nav>
          <MenuLink to="/news">News</MenuLink>
          <MenuLink to="/notices">Find Pet</MenuLink>
          <MenuLink to="/friends">Our Friends</MenuLink>
        </Nav>
      </MobileMenu>
    );
}

export default Mob;