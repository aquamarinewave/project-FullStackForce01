import { Link, CloseButton, ButtonText, TopMenu} from './MobileMenu.styled';
import MobileMenu from './MobileMenu';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Icon from 'utils/Icon/Icon';
import Logout from 'components/Logout/Logout.styled';

const Mob = () => {
  return (
   <MobileMenu>
        <TopMenu>
          <Logo />
          <Logout type="button">
            <ButtonText color="logout" weight="bold" margin="8px">
              Logout
            </ButtonText>
            <Icon name="logout" color="#FEF9F9" size={24} />
          </Logout>
          <CloseButton type="button">
            <Icon name="cross" color="#FFC107" size={24} />
          </CloseButton>
        </TopMenu>
        <Nav>
          <Link to="/news">News</Link>
          <Link to="/notices">Find Pet</Link>
          <Link to="/friends">Our Friends</Link>
        </Nav>
    </MobileMenu> 
    );
}

export default Mob;