// UserPage
// "Компонент рендериться на маршрут /user
// Компонент рендерить сторінку з компонентами UserData, Logout та PetsData.
// Компоненти UserData та  Logout потрібно реалізувати в спільному контейнері."	UserPage

// import UserData from '../../components/UserData/UserData';
// import Logout from '../../components/Logout/Logout';

import PetsData from '../../components/PetsData/PetsData';
import { UserPageContainer, UserCard } from './UserPage.styled';
// import { LogoutBtn } from 'components/Logout/LogoutBtn/LogoutBtn';
import UserData from 'components/UserData/UserData';
import Logout from 'components/Logout/Logout';

const UserPage = () => {
  return (
    <UserPageContainer>
      <UserCard>
        <UserData />
        <Logout isLogout isReversed isGrey marginL="12px" isDisplay isMarginT isRequest/>
      </UserCard>

      <PetsData />
    </UserPageContainer>
  );
};

export default UserPage;
