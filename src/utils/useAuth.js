import { useSelector } from 'react-redux';
import authSelector from '../redux/auth/authSelector';

const useAuth = () => {
  const isLoggedIn = useSelector(authSelector.loggedInSelector);
  const isRefreshing = useSelector(authSelector.selectIsRefreshing);
  const user = useSelector(authSelector.selectUser);
  const isUserName = useSelector(authSelector.userNameSelector);
  const isAvatar = useSelector(authSelector.userAvatarSelector);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    isUserName,
    isAvatar,
  };
};

export default useAuth;
