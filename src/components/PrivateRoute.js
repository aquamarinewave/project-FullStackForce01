import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(authSelector.loggedInSelector);

  const shouldRedirect = !isLogged;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
