import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { Nav, ButtonText, UserButton, BurgerButton, IconUser, IconBurger } from './UserNav.styled';
import Logout from 'components/Logout/Logout';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import useResize from 'hooks/useResize';
import sprite from '../../images/icons.svg';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';

const UserNav = ({ toggleMenu, menuOpen }) => {
  const name = useSelector(authSelector.userNameSelector);
  const [width] = useResize();

  return (
    <>
      <Nav>
        <Logout onClick={() => <ModalApproveAction />} />
        {width > 769 && (
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
      {width < 1280 && <MobileMenu toggleMenu={toggleMenu} openMenu={menuOpen} />}
    </>
  );
};

export default UserNav;
