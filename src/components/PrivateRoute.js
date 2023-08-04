import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isRefreshing = useSelector(authSelector.loadingSelector);
  const isLogged = useSelector(authSelector.loggedInSelector);

  const shouldRedirect = !isLogged && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
