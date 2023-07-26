import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { Button, ButtonText, IconLogout } from 'components/Logout/Logout.styled';
import sprite from '../../images/icons.svg';

const Logout = ({isMobile}) => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOperations.logoutUser());

  return (
    <Button onClick={onLogout} isMobile={isMobile}>
      <ButtonText color="logout" weight="bold" margin="8px">
        Logout
      </ButtonText>
      <IconLogout width={24} height={24}>
        <use href={`${sprite}#icon-logout`}></use>
      </IconLogout>
    </Button>
  );
};

export default Logout;
