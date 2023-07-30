import { useState, useEffect, useCallback } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Search from '../../components/Search/Search';
import { PageHeader } from './NewsPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import newsSelector from 'redux/news/newsSelector';
import newsOperations from '../../redux/news/operations';
import { Pagination } from '@mui/material';

const statusList = {
  REJECTED: 1,
  RESOLVED: 2,
  PENDING: 3,
  IDLE: 4,
};

const NewsPage = () => {
  const dispatch = useDispatch();
  const newsStore = useSelector(newsSelector.selectNews);
  const perPage = newsStore.perPage;
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

    dispatch(newsOperations.fetchNews({ pattern: '', currentPage: 1, perPage }));
  }, [dispatch, setStatus, PENDING, perPage]);

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
    [newsStore.items, newsStore.error, newsStore.totalPages, IDLE, PENDING, REJECTED, RESOLVED]
  );

  const haldleFormSubmit = useCallback(
    query => {
      dispatch(newsOperations.fetchNews({ pattern: query, currentPage: 1, perPage }));
      dispatch(newsOperations.setPattern(query));
    },
    [dispatch, perPage]
  );

  const clearSearch = () => {
    dispatch(newsOperations.fetchNews({ pattern: '', currentPage: 1, perPage }));
    dispatch(newsOperations.setPattern(''));
  };

  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search pattern={newsStore.pattern} onSubmit={haldleFormSubmit} onClear={clearSearch} />
      {showResults(status)}
      {newsStore.totalPages.length && <Pagination count={newsStore.totalPages} variant="outlined" />}
    </div>
  );
};

export default NewsPage;
