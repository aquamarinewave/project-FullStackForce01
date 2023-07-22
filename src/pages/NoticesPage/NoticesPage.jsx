import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { NoticesPageContainer, Title } from './NoticesPage.styled';

const NoticesPage = () => {
  return (
    <NoticesPageContainer>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </NoticesPageContainer>
  );
};

export default NoticesPage;
