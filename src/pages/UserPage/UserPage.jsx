import PetsData from '../../components/PetsData/PetsData';
import { UserPageContainer, UserCard, ProfileTitle, WrapperPage } from './UserPage.styled';
import UserData from 'components/UserData/UserData';
import Logout from 'components/Logout/Logout';

const UserPage = () => {
  return (
    <UserPageContainer>
      <WrapperPage>
        <ProfileTitle>My information:</ProfileTitle>
        <UserCard>
          <UserData />
          <Logout isLogout isReversed isGrey marginL="12px" isDisplay isMarginT isRequest />
        </UserCard>
      </WrapperPage>

      <PetsData />
    </UserPageContainer>
  );
};

export default UserPage;
