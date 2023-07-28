import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchNews } from '../../services/api/newsFetch';
import NewsList from '../../components/NewsList/NewsList';
import Search from '../../components/Search/Search';
import { PageHeader } from './NewsPage.styled';

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const text = searchParams.get('query');
  const [news, setNews] = useState([]);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const fetchNews = useCallback(async () => {
    setStatus('pending');
    try {
      const pattern = text && text.length > 3 ? text : '';
      const data = await fetchSearchNews(pattern);
      if (data.length === 0) {
        setStatus('rejected');
      } else {
        const { news } = data[0];
        if (news.length) {
          setNews(news.sort((a, b) => new Date(b.date) - new Date(a.date)));
        }
        setStatus('resolved');
      }
    } catch (error) {
      setError(error);
      setStatus('rejected');
    }
  }, [text]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const haldleFormSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const clearSearch = () => {
    setSearchParams({});
  };

  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search pattern={text} onSubmit={haldleFormSubmit} onClear={clearSearch} />
      {status === 'idle' && <div>Please, type something to the search</div>}
      {status === 'pending' && <div>Loading....</div>}
      {status === 'rejected' && <div>Oopps...no news with this text.{!error && <div>{error}</div>}</div>}
      {status === 'resolved' && <NewsList news={news} />}
    </div>
  );
};

export default NewsPage;
