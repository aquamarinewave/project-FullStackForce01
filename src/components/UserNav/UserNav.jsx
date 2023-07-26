import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { NavLink } from 'react-router-dom';
import {
  Nav, ButtonText, UserButton, BurgerButton,
  // IconLogout,
  IconUser, IconBurger,
  // Container
} from './UserNav.styled';
import Logout from 'components/Logout/Logout';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import sprite from '../../images/icons.svg';
import Modal from 'components/ModalApproveAction/ModalApproveAction';



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
        {/* <Container> */}
        <Logout onClick={()=><Modal/>} />
          {isDesktopOrTablet && (
            <NavLink to="/user">
              <UserButton>
                <IconUser width={24} height={24}>
                  <use href={`${sprite}#icon-user-1`}></use>
                </IconUser>
                <ButtonText color="name" weight="usual" marginL="12px">
                  {name}
                </ButtonText>
              </UserButton>
            </NavLink>
          )}
        {/* </Container> */}
        {isMobile && (
          <UserButton>
            <NavLink to="/user">
              <IconUser width={24} height={24}>
                <use href={`${sprite}#icon-user-1`}></use>
              </IconUser>
            </NavLink>
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
