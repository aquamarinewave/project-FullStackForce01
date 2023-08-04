import { useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import authSelector from 'redux/auth/authSelector';
import AuthNav from '../AuthNav/AuthNav';
import UserNav from '../UserNav/UserNav';

const Navigation = () => {
  const isLogged = useSelector(authSelector.loggedInSelector);

  return (
    <>
      <Nav />
      {isLogged ? <UserNav /> : <AuthNav />}
    </>
  );
};

export default Navigation;
