import { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (!text) {
      return;
    }

    setStatus('pending');

    fetchSearchNews(text)
      .then(response => {
        if (response.results.length === 0) {
          setStatus('rejected');
          return;
        }
        setNews(response.results);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [text]);

  const haldleFormSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search onSubmit={haldleFormSubmit} />
      {status === 'idle' && <div>Please, type something to the search</div>}
      {status === 'pending' && <div>Loading....</div>}
      {status === 'rejected' && <div>Oopps...no news with this text.{!error && <div>{error}</div>}</div>}
      {status === 'resolved' && <NewsList news={news} />}
    </div>
  );
};

export default NewsPage;
