import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useWindowWidth } from '@react-hook/window-size';
import noticesSelector from 'redux/notices/noticesSelector';
import authSelector from 'redux/auth/authSelector';
import noticesOperations from 'redux/notices/operation';

import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import Pagination from '../../components/Pagination/Pagination';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import AddPetButtonSmall from 'components/AddPetButton/AddPetButtonSmall';
import Loader from '../../components/Loader/Loader';
import ContentNotFound from '../../components/ContentNotFound/ContentNotFound';

import { ButtonsBox, NoticesPageContainer, Title } from './NoticesPage.styled';

const statusList = {
  REJECTED: 1,
  RESOLVED: 2,
  PENDING: 3,
  IDLE: 4,
};

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const isLoggedIn = useSelector(authSelector.loggedInSelector);
  const noticesStore = useSelector(noticesSelector.selectNotices);
  const perPage = noticesStore.perPage;
  const { REJECTED, RESOLVED, PENDING, IDLE } = statusList;
  const [status, setStatus] = useState(IDLE);
  const contentNotFoundText = 'Oopps...no listings found.';

  if (window.innerWidth > 1279 && window.innerWidth < 1300) {
    document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';
    document.body.style.overflowX = 'hidden';
  }
  if (window.innerWidth >= 1300) {
    document.body.style.marginRight = '0';
    document.body.style.overflowX = 'auto';
  }

  const switchStatus = useCallback(async () => {
    if (noticesStore.error || noticesStore.items.length === 0) {
      setStatus(REJECTED);
    } else {
      setStatus(RESOLVED);
    }
  }, [noticesStore.items, noticesStore.error, setStatus, REJECTED, RESOLVED]);

  useEffect(() => {
    switchStatus();
  }, [switchStatus]);

  useEffect(() => {
    const controller = new AbortController();
    setStatus(PENDING);
    const params = {
      pattern: '',
      currentPage: 1,
      perPage,
      controller: controller,
    };

    if (isLoggedIn && categoryName === 'own') {
      dispatch(noticesOperations.fetchNoticesOwn(params));
    } else if (isLoggedIn && categoryName === 'favorite') {
      dispatch(noticesOperations.fetchNoticesFavorites(params));
    } else {
      dispatch(
        noticesOperations.fetchNoticesForAll({
          ...params,
          categoryId: categoryName,
        })
      );
    }
  }, [dispatch, categoryName, isLoggedIn, setStatus, PENDING, perPage]);

  const showResults = useCallback(
    status => {
      switch (status) {
        case IDLE:
          return <div>Please, type something to the search</div>;
        case PENDING:
          return <Loader />;
        case REJECTED:
          return <ContentNotFound notFoundText={contentNotFoundText} pageError={noticesStore.error}></ContentNotFound>;
        case RESOLVED:
          return <NoticesCategoriesList notices={noticesStore.items} />;
        default:
          return <></>;
      }
    },
    [noticesStore.items, noticesStore.error, IDLE, PENDING, REJECTED, RESOLVED]
  );

  const handleFormSubmit = useCallback(
    query => {
      const controller = new AbortController();
      const params = {
        pattern: query,
        currentPage: 1,
        perPage,
        controller: controller,
      };

      if (isLoggedIn && categoryName === 'own') {
        dispatch(noticesOperations.fetchNoticesOwn(params));
      } else if (isLoggedIn && categoryName === 'favorite') {
        dispatch(noticesOperations.fetchNoticesFavorites(params));
      } else {
        dispatch(
          noticesOperations.fetchNoticesForAll({
            ...params,
            categoryId: categoryName,
          })
        );
      }
      // dispatch(noticesOperations.setPattern(query));
      // dispatch(noticesOperations.setCurrentPage(1));
      return () => {
        controller.abort();
      };
    },
    [dispatch, categoryName, perPage, isLoggedIn]
  );

  const clearSearch = () => {
    const controller = new AbortController();
    const params = {
      pattern: '',
      currentPage: 1,
      perPage,
      controller: controller,
    };

    if (isLoggedIn && categoryName === 'own') {
      dispatch(noticesOperations.fetchNoticesOwn(params));
    } else if (isLoggedIn && categoryName === 'favorite') {
      dispatch(noticesOperations.fetchNoticesFavorites(params));
    } else {
      dispatch(
        noticesOperations.fetchNoticesForAll({
          ...params,
          categoryId: categoryName,
        })
      );
    }

    dispatch(noticesOperations.setPattern(''));
    return () => {
      controller.abort();
    };
  };

  const width = useWindowWidth();

  const handleSwitchPage = useCallback(
    (_, currentPage) => {
      const controller = new AbortController();
      const pattern = noticesStore.pattern;
      const params = {
        pattern,
        currentPage,
        perPage,
        controller: controller,
      };

      if (isLoggedIn && categoryName === 'own') {
        dispatch(noticesOperations.fetchNoticesOwn(params));
      } else if (isLoggedIn && categoryName === 'favorite') {
        dispatch(noticesOperations.fetchNoticesFavorites(params));
      } else {
        dispatch(
          noticesOperations.fetchNoticesForAll({
            ...params,
            categoryId: categoryName,
          })
        );
      }
      dispatch(noticesOperations.setCurrentPage(currentPage));

      return () => {
        controller.abort();
      };
    },
    [dispatch, noticesStore.pattern, perPage, categoryName, isLoggedIn]
  );

  const showPagination = useCallback(() => {
    if (!noticesStore.totalPages) {
      return <></>;
    }

    return (
      <>
        {noticesStore.totalPages > 1 && (
          <Pagination
            page={noticesStore.currentPage}
            count={noticesStore.totalPages}
            variant="outlined"
            onChange={handleSwitchPage}
          />
        )}
      </>
    );
  }, [noticesStore.totalPages, noticesStore.currentPage, handleSwitchPage]);

  return (
    <NoticesPageContainer>
      <Title>Find your favorite pet</Title>

      <NoticesSearch
        pattern={noticesStore.pattern}
        onSubmit={handleFormSubmit}
        onClear={clearSearch}
        categoryName={categoryName}
      />

      <ButtonsBox>
        <NoticesCategoriesNav />
        {width >= 768 && <AddPetButton />} {width < 768 && <AddPetButtonSmall />}
      </ButtonsBox>

      {showResults(status)}
      {showPagination()}
    </NoticesPageContainer>
  );
};

export default NoticesPage;
