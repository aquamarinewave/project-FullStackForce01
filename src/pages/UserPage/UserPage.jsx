// UserPage
// "Компонент рендериться на маршрут /user
// Компонент рендерить сторінку з компонентами UserData, Logout та PetsData.
// Компоненти UserData та  Logout потрібно реалізувати в спільному контейнері."	UserPage

// import UserData from '../../components/UserData/UserData';
// import Logout from '../../components/Logout/Logout';

import PetsData from '../../components/PetsData/PetsData';
import { UserPageContainer } from './UserPage.styled';

const UserPage = () => {
  return (
    <UserPageContainer>
      {/* <UserData />

      <Logout /> */}
      <div>User data</div>

      <PetsData />
    </UserPageContainer>
  );
};

export default UserPage;
