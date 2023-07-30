import { useWindowWidth } from '@react-hook/window-size';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { Nav, ButtonText, UserButton, BurgerButton, IconUser, IconBurger } from './UserNav.styled';
import Logout from 'components/Logout/Logout';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import sprite from '../../images/icons.svg';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const UserNav = ({ toggleMenu, menuOpen, closeMenu }) => {
  const width = useWindowWidth();
  const name = useSelector(authSelector.userNameSelector);

  return (
    <>
      <Nav>
        <Logout
          isLogout
          isRequest
          spacing
          isBlue
          isWhite
          isBorder
          margin="8px"
          isBold
          closeMenu={closeMenu}
          onClick={() => <ModalApproveAction />}
        />
        {width >= 768 && (
          <UserButton to="/user">
            <IconUser width={24} height={24}>
              <use href={`${sprite}#icon-user-1`}></use>
            </IconUser>
            <ButtonText color="name" weight="usual" marginL="12px">
              {name}
            </ButtonText>
          </UserButton>
        )}
        {width < 768 && (
          <UserButton to="/user">
            <IconUser width={24} height={24}>
              <use href={`${sprite}#icon-user-1`}></use>
            </IconUser>
          </UserButton>
        )}
        {width < 1280 && (
          <BurgerButton type="button" onClick={() => toggleMenu()}>
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

export default UserNav;
