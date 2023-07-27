import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { Nav, ButtonText, UserButton, BurgerButton, IconUser, IconBurger } from './UserNav.styled';
import Logout from 'components/Logout/Logout';
import Modal from 'components/ModalApproveAction/ModalApproveAction';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import sprite from '../../images/icons.svg';

const UserNav = ({ toggleMenu, menuOpen }) => {
  const name = useSelector(authSelector.userNameSelector);

  const [isTabletOrMobile, setIsTabletOrMobile] = useState(window.innerWidth < 1280);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(window.innerWidth > 769);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrMobile(window.innerWidth < 1280);
      setIsDesktopOrTablet(window.innerWidth > 769);
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Nav>
        <Logout onClick={() => <Modal />} />
        {isDesktopOrTablet && (
          <UserButton to="/user">
            <IconUser width={24} height={24}>
              <use href={`${sprite}#icon-user-1`}></use>
            </IconUser>
            <ButtonText color="name" weight="usual" marginL="12px">
              {name}
            </ButtonText>
          </UserButton>
        )}
        {isMobile && (
          <UserButton to="/user">
            <IconUser width={24} height={24}>
              <use href={`${sprite}#icon-user-1`}></use>
            </IconUser>
          </UserButton>
        )}
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

export default UserNav;
