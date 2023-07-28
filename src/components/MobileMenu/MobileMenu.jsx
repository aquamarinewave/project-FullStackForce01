import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import authSelector from 'redux/auth/authSelector';
import { createPortal } from 'react-dom';
import { useWindowWidth } from '@react-hook/window-size';
import {
  Menu,
  CloseButton,
  ButtonText,
  TopMenu,
  IconCross,
  LoginButton,
  IconPawPrint,
  RegisterButton,
  Container,
  IconUser,
  UserButton,
ButtonContainer
} from './MobileMenu.styled';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Logout from 'components/Logout/Logout';
import sprite from '../../images/icons.svg';

const MobileMenu = ({ openMenu, toggleMenu, isOpen }) => {
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
        <Menu isOpen={openMenu}>
          <TopMenu>
            <div>
              <Logo />
            </div>
            {!isLogged ? (
              <>
                <Container>
                  <LoginButton to="/login" onClick={() => toggleMenu()}>
                    <ButtonText color="login" margin="8px" weight="bold">
                      Log IN
                    </ButtonText>
                    <IconPawPrint width={24} height={24}>
                      <use href={`${sprite}#icon-pawprint-1`}></use>
                    </IconPawPrint>
                  </LoginButton>
                  <RegisterButton to="/register" onClick={() => toggleMenu()}>
                    <ButtonText color="register" weight="semi-bold">
                      Registration
                    </ButtonText>
                  </RegisterButton>
                </Container>
                <CloseButton type="button" onClick={() => toggleMenu()}>
                  <IconCross width={24} height={24}>
                    <use href={`${sprite}#icon-cross`}></use>
                  </IconCross>
                </CloseButton>
                <Nav isMobile />
              </>
            ) : (
              <ButtonContainer>
                {width > 768 && width < 1280 && <Logout isMobile />}
                <CloseButton type="button" onClick={() => toggleMenu()}>
                  <IconCross width={24} height={24}>
                    <use href={`${sprite}#icon-cross`}></use>
                  </IconCross>
                </CloseButton>
              </ButtonContainer>
            )}
          </TopMenu>
          {width < 768 && (
            <>
              <UserButton to="/user">
                <IconUser width={24} height={24}>
                  <use href={`${sprite}#icon-user-1`}></use>
                </IconUser>
                <ButtonText color="name" weight="usual" marginL="12px">
                  {name}
                </ButtonText>
              </UserButton>
            </>
          )}
          <Nav isMobile />
          {width < 768 && <Logout isMobile />}
        </Menu>,
        document.querySelector('#portal-root')
      )
    : null;
};

export default MobileMenu;
