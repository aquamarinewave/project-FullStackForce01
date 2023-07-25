import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, ButtonText, UserButton, BurgerButton, IconLogout, IconUser, IconBurger } from './UserNav.styled';
import Logout from 'components/Logout/Logout.styled';
import sprite from '../../images/icons.svg';


const UserNav = () => {

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
    <Nav>
      <Logout type="button">
        <ButtonText color="logout" weight="bold" margin="8px">
          Logout
        </ButtonText>
        <IconLogout width={24} height={24}>
          <use href={`${sprite}#icon-logout`}></use>
        </IconLogout>
      </Logout>
      {isDesktopOrTablet && (
        <NavLink to="/user">
          <UserButton>
            <IconUser width={24} height={24}>
              <use href={`${sprite}#icon-user-1`}></use>
            </IconUser>
            <ButtonText color="name" weight="usual" marginL="12px">
              Name
            </ButtonText>
          </UserButton>
        </NavLink>
      )}
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
        <BurgerButton type="button">
          <IconBurger width={24} height={24}>
            <use href={`${sprite}#icon-menu-hamburger`}></use>
          </IconBurger>
        </BurgerButton>
      )}
    </Nav>
  );
};

export default UserNav;
