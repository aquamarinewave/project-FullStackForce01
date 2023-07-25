import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelector from 'redux/auth/authSelector';

const RegisterPublicRouter = () => {
  const isLogged = useSelector(authSelector.loggedInSelector);
  if (isLogged) {
    return <Navigate replace to="/user" />;
  }
  return <Outlet />;
};

const LoginPublicRouter = () => {
  const isLogged = useSelector(authSelector.loggedInSelector);
  if (isLogged) {
    return <Navigate replace to="/notices" />;
  }
  return <Outlet />;
};

const AuthRouters = {
  RegisterPublicRouter,
  LoginPublicRouter,
};

export default AuthRouters;
