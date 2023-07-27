import { useEffect, useState } from 'react';
import { Nav, ButtonText, LoginButton, RegisterButton, BurgerButton, IconPawPrint, IconBurger } from './AuthNav.styled';
import sprite from '../../images/icons.svg';
import MobileMenu from 'components/MobileMenu/MobileMenu';
// import Button from 'components/Button/Button';

const AuthNav = ({ toggleMenu, menuOpen }) => {
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
    <>
      <Nav>
        <LoginButton to="/login">
          <ButtonText color="login" margin="8px" weight="bold">
            Log IN
          </ButtonText>
          <IconPawPrint width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconPawPrint>
        </LoginButton>
        <RegisterButton to="/register">
          <ButtonText color="register" weight="semi-bold">
            Registration
          </ButtonText>
        </RegisterButton>
        {isTabletOrMobile && (
          <BurgerButton type="button" onClick={() => toggleMenu()}>
            <IconBurger width={24} height={24}>
              <use href={`${sprite}#icon-menu-hamburger`}></use>
            </IconBurger>
          </BurgerButton>
        )}
      </Nav>
      {isTabletOrMobile && <MobileMenu toggleMenu={toggleMenu} openMenu={menuOpen} />}
    </>
  );
};

export default AuthNav;
