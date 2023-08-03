import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(authSelector.loggedInSelector);

  return isLogged ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
