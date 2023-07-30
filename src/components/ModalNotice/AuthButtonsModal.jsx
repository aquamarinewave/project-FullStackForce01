import { Nav, ButtonText, LoginButton, RegisterButton, IconPawPrint} from './AuthButtonsModal.styled';
import sprite from '../../images/icons.svg';


const AuthButtonsModal = ({ toggleMenu}) => {
  return (
    <>
      <Nav>
        <LoginButton to="/login" onClick={() => toggleMenu()}>
          <ButtonText color="login" margin="8px" weight="bold">
            Log IN
          </ButtonText>
          <IconPawPrint width={24} height={24}>
            <use href={`${sprite}#icon-pawprint-1`}></use>
          </IconPawPrint>
        </LoginButton>
        <RegisterButton to="/register" onClick={() => toggleMenu()}>
          <ButtonText color="register" weight="semi-bold">
            Registration
          </ButtonText>
        </RegisterButton>
      </Nav>
    </>
  );
};

export default AuthButtonsModal;
