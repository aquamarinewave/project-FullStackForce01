import { NavLink } from 'react-router-dom';
import { Nav, MButtonText, LoginButton, RegisterButton, BurgerButton, IconPawPrint, IconBurger } from './AuthNav.styled';
import sprite from '../../images/icons.svg';
// import Button from 'components/Button/Button';

<IconPawPrint width={24} height={24}>
  <use href={`${sprite}#icon-pawprint-1`}></use>
</IconPawPrint>;

const isTabletOrMobile = window.screen.width < 1279;

const AuthNav = () => {
  return (
    <Nav>
      <NavLink to="/login">
        <LoginButton type="button">
          <MButtonText color="login" margin="8px" weight="bold">
            Log IN
          </MButtonText>
          <IconPawPrint width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconPawPrint>
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
          <IconBurger width={24} height={24}>
            <use href={`${sprite}#icon-menu-hamburger`}></use>
          </IconBurger>
        </BurgerButton>
      )}
    </Nav>
  );
};

export default AuthNav;
