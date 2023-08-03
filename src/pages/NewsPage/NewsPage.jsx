import { useState, useEffect, useCallback } from 'react';
import NewsList from '../../components/NewsList/NewsList';
import Search from '../../components/Search/Search';
import { PageHeader } from './NewsPage.styled';
import { useSelector, useDispatch } from 'react-redux';
import newsSelector from 'redux/news/newsSelector';
import newsOperations from '../../redux/news/operations';
import Pagination from '../../components/Pagination/Pagination';
import Loader from '../../components/Loader/Loader';
import ContentNotFound from '../../components/ContentNotFound/ContentNotFound';

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
  const contentNotFoundText = 'Oopps...no news with this text.';

  if (window.innerWidth > 1279 && window.innerWidth < 1300) {
    document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';
    document.body.style.overflowX = 'hidden';
  }
  if (window.innerWidth >= 1300) {
    document.body.style.marginRight = '0';
    document.body.style.overflowX = 'auto';
  }

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
          return <Loader />;
        case REJECTED:
          return <ContentNotFound notFoundText={contentNotFoundText} pageError={newsStore.error}></ContentNotFound>;
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
      dispatch(newsOperations.fetchNews({ pattern: query, currentPage: 1, perPage }));
      dispatch(newsOperations.setPattern(query));
      dispatch(newsOperations.setCurrentPage(1));
    },
    [dispatch, perPage]
  );

  const clearSearch = () => {
    dispatch(newsOperations.fetchNews({ pattern: '', currentPage: 1, perPage }));
    dispatch(newsOperations.setPattern(''));
  };

  const handleSwitchPage = useCallback(
    (_, currentPage) => {
      const pattern = newsStore.pattern;
      dispatch(newsOperations.fetchNews({ pattern, currentPage, perPage }));
      dispatch(newsOperations.setCurrentPage(currentPage));
    },
    [dispatch, newsStore.pattern, perPage]
  );

  const showPagination = useCallback(() => {
    if (!newsStore.totalPages) {
      return <></>;
    }

    return (
      <>
        {newsStore.totalPages > 1 && (
          <Pagination
            page={newsStore.currentPage}
            count={newsStore.totalPages}
            variant="outlined"
            onChange={handleSwitchPage}
          />
        )}
      </>
    );
  }, [newsStore.totalPages, newsStore.currentPage, handleSwitchPage]);

  return (
    <div>
      <PageHeader>News</PageHeader>
      <Search pattern={newsStore.pattern} onSubmit={haldleFormSubmit} onClear={clearSearch} />
      {showResults(status)}
      {showPagination()}
    </div>
  );
};

export default NewsPage;
