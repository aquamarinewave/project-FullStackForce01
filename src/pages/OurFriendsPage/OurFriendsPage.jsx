import OurFriendsList from '../../components/OurFriendsList/OurFriendsList';
import { OurFriendsPageContainer, Title } from './OurFriendsPage.styled';

const OurFriendsPage = () => {
  return (
    <OurFriendsPageContainer>
      <Title>Our friends</Title>
      <OurFriendsList />
    </OurFriendsPageContainer>
  );
};

export default OurFriendsPage;
