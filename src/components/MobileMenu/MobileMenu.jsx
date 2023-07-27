import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { createPortal } from 'react-dom';
import useResize from 'hooks/useResize';
import {
  Test,
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
} from './MobileMenu.styled';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Logout from 'components/Logout/Logout';
import sprite from '../../images/icons.svg';

const MobileMenu = ({ openMenu, toggleMenu }) => {
   const [width] = useResize();
  const name = useSelector(authSelector.userNameSelector);
  const isLogged = useSelector(authSelector.loggedInSelector);

  return createPortal(
    <Test isOpen={openMenu}>
      <TopMenu>
        <div>
          <Logo />
        </div>
        {!isLogged ? (
          <>
            <Container>
              <LoginButton isMobile={true} to="/login" onClick={() => toggleMenu()}>
                <ButtonText color="login" margin="8px" weight="bold">
                  Log IN
                </ButtonText>
                <IconPawPrint width={24} height={24}>
                  <use href={`${sprite}#icon-pawprint-1`}></use>
                </IconPawPrint>
              </LoginButton>
              <RegisterButton isMobile={true} to="/register" onClick={() => toggleMenu()}>
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
          <>
            {width > 768 && width < 1280 && <Logout isMobile />}
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
                <Logout isMobile />
              </>
            )}
            <CloseButton type="button" onClick={() => toggleMenu()}>
              <IconCross width={24} height={24}>
                <use href={`${sprite}#icon-cross`}></use>
              </IconCross>
            </CloseButton>
            <Nav isMobile />
          </>
        )}
      </TopMenu>
    </Test>,
    document.querySelector('#portal-root')
  );
};

export default MobileMenu;
