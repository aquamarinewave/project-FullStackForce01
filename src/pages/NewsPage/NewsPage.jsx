import NewsList from 'components/NewsList/NewsList';
import Search from '../../components/Search/Search';
import { PageHeader } from './NewsPage.styled';

const NewsPage = () => {
  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search />
      <NewsList />
    </div>
  );
};

export default NewsPage;
