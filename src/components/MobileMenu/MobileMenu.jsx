import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelector from 'redux/auth/authSelector';
import { createPortal } from 'react-dom';
import { useWindowWidth } from '@react-hook/window-size';
import AuthNav from 'components/AuthNav/AuthNav';
import {
  Menu,
  CloseButton,
  ButtonText,
  TopMenu,
  IconCross,
  Container,
  IconUser,
  UserButton,
  ButtonContainer,
} from './MobileMenu.styled';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Logout from 'components/Logout/Logout';
import sprite from '../../images/icons.svg';

const MobileMenu = ({ toggleMenu, isOpen, closeMenu }) => {
  const width = useWindowWidth();
  const name = useSelector(authSelector.userNameSelector);
  const isLogged = useSelector(authSelector.loggedInSelector);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return isOpen
    ? createPortal(
        <Menu isOpen={isOpen}>
          <TopMenu>
            <div>
              <Logo isMobile closeMenu={closeMenu} />
            </div>
            {!isLogged ? (
              <>
                <Container>
                  {width > 768 && width < 1280 && <AuthNav isMobile close={closeMenu} />}
                  <CloseButton type="button" onClick={() => toggleMenu()}>
                    <IconCross width={24} height={24}>
                      <use href={`${sprite}#icon-cross`}></use>
                    </IconCross>
                  </CloseButton>
                </Container>
              </>
            ) : (
              <ButtonContainer>
                {width >= 768 && width < 1280 && (
                  <Logout margin="8px" isLogout isBorder isBold isWhite isBlue isMobile isRequest spacing isDisplay />
                )}
                <CloseButton type="button" onClick={() => toggleMenu()}>
                  <IconCross width={24} height={24}>
                    <use href={`${sprite}#icon-cross`}></use>
                  </IconCross>
                </CloseButton>
              </ButtonContainer>
            )}
          </TopMenu>
          {!isLogged && width < 768 && <AuthNav isMobile close={closeMenu} />}
          {isLogged && width < 768 && (
            <>
              <UserButton to="/user" onClick={() => toggleMenu()}>
                <IconUser width={24} height={24}>
                  <use href={`${sprite}#icon-user-1`}></use>
                </IconUser>
                <ButtonText color="name" weight="usual" marginL="12px">
                  {name}
                </ButtonText>
              </UserButton>
            </>
          )}
          <Nav isMobile closeMenu={closeMenu} />
          {isLogged && width < 768 && (
            <Logout isLogout margin="8px" isBold isBorder isBlue isWhite isMobile isRequest spacing isDisplay />
          )}
        </Menu>,
        document.querySelector('#portal-root')
      )
    : null;
};

export default MobileMenu;
