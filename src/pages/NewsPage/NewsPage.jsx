import Search from '../../components/Search/Search';
import { PageHeader, ReadMoreBtn, NewsItem } from './NewsPage.styled';

const NewsPage = () => {
  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search></Search>
      <div>
        <NewsItem>
          <img src="" alt="" />
          <h3>News title</h3>
          <p>News paragraph</p>
          <div>date</div>
          <ReadMoreBtn href="#">Read more</ReadMoreBtn>
        </NewsItem>
      </div>
    </div>
  );
};

export default NewsPage;
