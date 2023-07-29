import { useState, useEffect, useCallback } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Search from '../../components/Search/Search';
import { PageHeader } from './NewsPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import newsSelector from 'redux/news/newsSelector';
import newsOperations from '../../redux/news/operations';

const statusList = {
  REJECTED: 1,
  RESOLVED: 2,
  PENDING: 3,
  IDLE: 4,
};

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsStore = useSelector(newsSelector.selectNews);
  const { REJECTED, RESOLVED, PENDING, IDLE } = statusList;
  const [status, setStatus] = useState(IDLE);

  const switchStatus = useCallback(async () => {
    if (newsStore.error || newsStore.items.length === 0) {
      setStatus(REJECTED);
    } else {
      setStatus(RESOLVED);
    }
  }, [newsStore.items, newsStore.error, setStatus, REJECTED, RESOLVED]);

  useEffect(() => {
    switchStatus();
  }, [switchStatus]);

  useEffect(() => {
    setStatus(PENDING);

    dispatch(newsOperations.fetchNews({ pattern: '', page: 1 }));
  }, [dispatch, setStatus, PENDING]);

  const showResults = useCallback(
    status => {
      switch (status) {
        case IDLE:
          return <div>Please, type something to the search</div>;
        case PENDING:
          return <div>Loading....</div>;
        case REJECTED:
          return <div>Oopps...no news with this text.{newsStore.error && <div>{newsStore.error}</div>}</div>;
        case RESOLVED:
          return <NewsList news={newsStore.items} />;
        default:
          return <></>;
      }
    },
    [newsStore.items, newsStore.error, IDLE, PENDING, REJECTED, RESOLVED]
  );

  const haldleFormSubmit = useCallback(
    query => {
      dispatch(newsOperations.fetchNews({ pattern: query, page: 1 }));
      dispatch(newsOperations.setPattern(query));
    },
    [dispatch]
  );

  const clearSearch = () => {
    dispatch(newsOperations.fetchNews({ pattern: '', page: 1 }));
    dispatch(newsOperations.setPattern(''));
  };

  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search pattern={newsStore.pattern} onSubmit={haldleFormSubmit} onClear={clearSearch} />
      {showResults(status)}
    </div>
  );
};

export default NewsPage;
