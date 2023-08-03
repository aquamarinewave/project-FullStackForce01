import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogged = useSelector(authSelector.loggedInSelector);
  const isRefreshing = useSelector(authSelector.loadingSelector);
  const shouldRedirect = !isLogged && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
