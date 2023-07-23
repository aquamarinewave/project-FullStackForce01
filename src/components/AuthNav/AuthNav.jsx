import { NavLink } from 'react-router-dom';
import { Nav, MButtonText, LoginButton, RegisterButton, BurgerButton } from './AuthNav.styled';
import Icon from 'utils/Icon/Icon';
// import Button from 'components/Button/Button';

const isTabletOrMobile = window.screen.width < 1279;

const AuthNav = () => {
  return (
    <Nav>
      <NavLink to="/login">
        <LoginButton type="button">
          <MButtonText color="login" margin="8px" weight="bold">
            Log IN
          </MButtonText>
          <Icon name="pawprint-1" color="white" size={24} />
        </LoginButton>
      </NavLink>
      <NavLink to="/register">
        <RegisterButton type="button">
          <MButtonText color="register" weight="semi-bold">
            Registration
          </MButtonText>
        </RegisterButton>
      </NavLink>
      {isTabletOrMobile && (
        <BurgerButton type="button">
          <Icon name="menu-hamburger" color="#FFC107" size={24} />
        </BurgerButton>
      )}
    </Nav>
  );
};

export default AuthNav;
