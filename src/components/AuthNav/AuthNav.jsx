import { Nav, ButtonText, LoginButton, RegisterButton, BurgerButton, IconPawPrint, IconBurger } from './AuthNav.styled';
import { useWindowWidth } from '@react-hook/window-size';
import sprite from '../../images/icons.svg';
import MobileMenu from 'components/MobileMenu/MobileMenu';
// import Button from 'components/Button/Button';

const AuthNav = ({ toggleMenu, menuOpen, isMobile }) => {
 const width = useWindowWidth();

  return (
    <>
      <Nav isMobile={isMobile}>
        <LoginButton isMobile={isMobile} to="/login" onClick={() => toggleMenu()}>
          <ButtonText color="login" margin="8px" weight="bold">
            Log IN
          </ButtonText>
          <IconPawPrint width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconPawPrint>
        </LoginButton>
      <RegisterButton isMobile={isMobile} to="/register" vonClick={() => toggleMenu()}>
          <ButtonText color="register" weight="semi-bold">
            Registration
          </ButtonText>
        </RegisterButton>
        {width < 1280 && (
          <BurgerButton isMobile={isMobile}  type="button" onClick={() => toggleMenu()}>
            <IconBurger width={24} height={24}>
              <use href={`${sprite}#icon-menu-hamburger`}></use>
            </IconBurger>
          </BurgerButton>
        )}
      </Nav>
      {width < 1280 && <MobileMenu toggleMenu={toggleMenu} isOpen={menuOpen} openMenu={menuOpen} />}
    </>
  );
};

export default AuthNav;
