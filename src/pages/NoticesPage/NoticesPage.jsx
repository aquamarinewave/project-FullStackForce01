import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';

const NoticesPage = () => {
  return (
    <div>
      <h1>Find your favorite pet</h1>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
    </div>
  );
};

export default NoticesPage;
