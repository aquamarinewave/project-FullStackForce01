
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelector from 'redux/auth/authSelector';
import Loader from './Loader/Loader';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, token } = useSelector(authSelector.selectAuth);


  if (!isLoggedIn && token) {
    return <Loader />;
  }

  if (!isLoggedIn && !token) {
    return  <Navigate to={redirectTo} />;
  }

  return Component;
};

export default PrivateRoute;