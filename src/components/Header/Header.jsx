import MainHeader from './Header.styled';
import LoginButton from './Buttons/LoginButton';
import RegisterButton from './Buttons/RegisterButton';
// import UserButton from './Buttons/UserButton';
import ButtonText from './ButtonText/ButtonText';
import MenuLink from './MenuLink/MenuLink';
// import Paw from './Icon';
import Icon from 'utils/Icon/Icon';
// import UserNavContainer from '../UserNav/UserNavContainer/UserNavContainer';
import AuthNavContainer from '../AuthNav/AuthNavContainer/AuthNavContainer';
import NavContainer from '../Nav/NavContainer/NavContainer';
import Logo from 'components/Logo/Logo';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
// import UserNav from 'components/UserNav/UserNav';
// import Logout from 'components/Logout/Logout.styled';
// import MobileMenu from '../MobileMenu/MobileMenu';
// import Mob from 'components/MobileMenu/Mob';

import { NavLink } from 'react-router-dom';

// const isAuth = () => {
//   return true;
// };

const Header = () => {
  return (
    <MainHeader>
      {/* <Mob /> */}
      <NavContainer>
        <Logo />
        <Nav>
          <MenuLink to="/news">News</MenuLink>
          <MenuLink to="/notices">Find Pet</MenuLink>
          <MenuLink to="/friends">Our Friends</MenuLink>
        </Nav>
      </NavContainer>
      {/* {!isAuth ? ( */}
      <AuthNavContainer>
        <AuthNav>
          <NavLink to="/login">
            <LoginButton type="button">
              <ButtonText color="login" margin="8px" weight="bold">
                Log IN
              </ButtonText>
              <Icon name="pawprint-1" color="white" size={24} />
              {/* <Paw /> */}
            </LoginButton>
          </NavLink>
          <NavLink to="/register">
            <RegisterButton type="button">
              <ButtonText color="register" weight="semi-bold">
                Registration
              </ButtonText>
            </RegisterButton>
          </NavLink>
        </AuthNav>
      </AuthNavContainer>

      {/* ) : ( */}
      {/* <UserNavContainer>
        <UserNav>
          <Logout type="button">
            <ButtonText color="logout" weight="bold">
              Logout
            </ButtonText>
            <Icon name="logout" color="#FEF9F9" size={24} />
          </Logout>
          <NavLink to="/user">
            <UserButton>
             <Icon name="user-1" color="#FFC107" size={24} />
              <ButtonText color="name" weight="usual">
                Name
              </ButtonText>
            </UserButton>
          </NavLink>
        </UserNav>
      </UserNavContainer> */}
      {/* )} */}
    </MainHeader>
  );
};

export default Header;
