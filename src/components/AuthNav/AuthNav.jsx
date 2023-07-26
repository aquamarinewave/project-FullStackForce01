import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  Nav,
  MButtonText,
  LoginButton,
  RegisterButton,
  BurgerButton,
  IconPawPrint,
  IconBurger,
} from './AuthNav.styled';
import sprite from '../../images/icons.svg';
// import Button from 'components/Button/Button';

const AuthNav = ({ toggleMenu }) => {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1280);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <BurgerButton type="button" onClick={() => toggleMenu()}>
          <IconBurger width={24} height={24}>
            <use href={`${sprite}#icon-menu-hamburger`}></use>
          </IconBurger>
        </BurgerButton>
      )}
    </Nav>
  );
};

export default AuthNav;
