import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import authSelector from 'redux/auth/authSelector';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';

const Navigation = ({ toggleMenu, openMenu, closeMenu }) => {
  const isLogged = useSelector(authSelector.loggedInSelector);

  return (
    <>
      <Nav closeMenu={closeMenu} />
      {isLogged ? (
        <UserNav toggleMenu={toggleMenu} menuOpen={openMenu} />
      ) : (
        <AuthNav toggleMenu={toggleMenu} menuOpen={openMenu} />
      )}
    </>
  );
};

export default Navigation;
