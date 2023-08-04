import { useState, useEffect } from 'react';
import { Nav, ButtonText, LoginButton, RegisterButton, BurgerButton, IconPawPrint, IconBurger } from './AuthNav.styled';
import { useWindowWidth } from '@react-hook/window-size';
import sprite from '../../images/icons.svg';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const AuthNav = ({ isMobile, close }) => {
  const width = useWindowWidth();

  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = () => {
      setMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
      setMenuOpen(false);
  };

  return isMobile ? (
    <>
      <Nav isMobile={isMobile}>
        <LoginButton
          activeclassname="active"
          color="login"
          hovercolor="register"
          isMobile={isMobile}
          to="/login"
          onClick={() => close()}
        >
          <ButtonText margin="8px" weight="bold">
            Log IN
          </ButtonText>
          <IconPawPrint width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconPawPrint>
        </LoginButton>
        <RegisterButton
          activeclassname="active"
          color="register"
          hovercolor="login"
          isMobile={isMobile}
          to="/register"
          onClick={() => close()}
        >
          <ButtonText weight="semi-bold">Registration</ButtonText>
        </RegisterButton>
        {width < 1280 && (
          <BurgerButton isMobile={isMobile} type="button" onClick={() => toggleMenu()} aria-label="Open menu button">
            <IconBurger width={24} height={24}>
              <use href={`${sprite}#icon-menu-hamburger`}></use>
            </IconBurger>
          </BurgerButton>
        )}
      </Nav>
      {width < 1280 && <MobileMenu closeMenu={closeMenu} toggleMenu={toggleMenu} isOpen={isMenuOpen} />}
    </>):( <>
      <Nav isMobile={isMobile}>
        <LoginButton
          activeclassname="active"
          color="login"
          hovercolor="register"
          isMobile={isMobile}
          to="/login"
        >
          <ButtonText margin="8px" weight="bold">
            Log IN
          </ButtonText>
          <IconPawPrint width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconPawPrint>
        </LoginButton>
        <RegisterButton
          activeclassname="active"
          color="register"
          hovercolor="login"
          isMobile={isMobile}
          to="/register"
        >
          <ButtonText weight="semi-bold">Registration</ButtonText>
        </RegisterButton>
        {width < 1280 && (
          <BurgerButton isMobile={isMobile} type="button" onClick={() => toggleMenu()} aria-label="Open menu button">
            <IconBurger width={24} height={24}>
              <use href={`${sprite}#icon-menu-hamburger`}></use>
            </IconBurger>
          </BurgerButton>
        )}
      </Nav>
      {width < 1280 && <MobileMenu closeMenu={closeMenu} toggleMenu={toggleMenu} isOpen={isMenuOpen} />}
    </>)
};

export default AuthNav;
