// UserPage
// "Компонент рендериться на маршрут /user
// Компонент рендерить сторінку з компонентами UserData, Logout та PetsData.
// Компоненти UserData та  Logout потрібно реалізувати в спільному контейнері."	UserPage

// import UserData from '../../components/UserData/UserData';
// import Logout from '../../components/Logout/Logout';

import PetsData from '../../components/PetsData/PetsData';
import { UserPageContainer } from './UserPage.styled';
import UserForm from '../../components/UserForm/UserForm';

const UserPage = () => {
  return (
    <UserPageContainer>
      <UserForm />
      {/* <UserData />

      <Logout /> */}

      <PetsData />
    </UserPageContainer>
  );
};

export default UserPage;
