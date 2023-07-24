import { NavLink } from 'react-router-dom';
import { Nav, ButtonText, UserButton, BurgerButton } from './UserNav.styled';
import Logout from 'components/Logout/Logout.styled';
import Icon from 'utils/Icon/Icon';

const isDesktopOrTablet = window.screen.width > 768;
const isTabletOrMobile = window.screen.width < 1279;
const isMobile = window.screen.width < 768;

const UserNav = () => {
  return(
  <Nav>
    <Logout type="button">
      <ButtonText color="logout" weight="bold" margin="8px">
        Logout
      </ButtonText>
      <Icon name="logout" color="#FEF9F9" size={24} />
    </Logout>
    {isDesktopOrTablet && (
      <NavLink to="/user">
        <UserButton>
          <Icon name="user-1" color="#FFC107" size={24} />
          <ButtonText color="name" weight="usual" marginL="12px">
            Name
          </ButtonText>
        </UserButton>
      </NavLink>
    )}
    {isMobile && (
      <UserButton>
        <NavLink to="/user">
          <Icon name="user-1" color="#FFC107" size={24} />
        </NavLink>
      </UserButton>
    )}
    {isTabletOrMobile && (
      <BurgerButton type="button">
        <Icon name="menu-hamburger" color="#FFC107" size={24} />
      </BurgerButton>
    )}
  </Nav>);
}

export default UserNav;

