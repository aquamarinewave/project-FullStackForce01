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

import { ButtonsBox, NoticesPageContainer, Title } from './NoticesPage.styled';
import Loader from '../../components/Loader/Loader';

const statusList = {
  REJECTED: 1,
  RESOLVED: 2,
  PENDING: 3,
  IDLE: 4,
};

const NoticesPage = () => {
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  const isLogged = useSelector(authSelector.loggedInSelector);
  const noticesStore = useSelector(noticesSelector.selectNotices);
  const perPage = noticesStore.perPage;
  const { REJECTED, RESOLVED, PENDING, IDLE } = statusList;
  const [status, setStatus] = useState(IDLE);

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

    if (isLogged && categoryName === 'own') {
      dispatch(
        noticesOperations.fetchNoticesOwn({
          pattern: '',
          currentPage: 1,
          perPage,
          controller: controller,
        })
      );
    } else if (isLogged && categoryName === 'favorite') {
      dispatch(
        noticesOperations.fetchNoticesFavorites({
          pattern: '',
          currentPage: 1,
          perPage,
          controller: controller,
        })
      );
    } else {
      dispatch(
        noticesOperations.fetchNoticesForAll({
          pattern: '',
          currentPage: 1,
          perPage,
          categoryId: categoryName,
          controller: controller,
        })
      );
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, categoryName, isLogged, setStatus, PENDING, perPage]);

  const showResults = useCallback(
    status => {
      switch (status) {
        case IDLE:
          return <div>Please, type something to the search</div>;
        case PENDING:
          return <Loader />;
        case REJECTED:
          return <div>Oopps...no listings found.{noticesStore.error && <div>{noticesStore.error}</div>}</div>;
        case RESOLVED:
          return <NoticesCategoriesList notices={noticesStore.items} />;
        default:
          return <></>;
      }
    },
    [noticesStore.items, noticesStore.error, IDLE, PENDING, REJECTED, RESOLVED]
  );

  const haldleFormSubmit = useCallback(
    query => {
      const controller = new AbortController();

      if (isLogged && categoryName === 'own') {
        dispatch(
          noticesOperations.fetchNoticesOwn({
            pattern: query,
            currentPage: 1,
            perPage,
            controller: controller,
          })
        );
      } else if (isLogged && categoryName === 'favorite') {
        dispatch(
          noticesOperations.fetchNoticesFavorites({
            pattern: query,
            currentPage: 1,
            perPage,
            controller: controller,
          })
        );
      } else {
        dispatch(
          noticesOperations.fetchNoticesForAll({
            pattern: query,
            currentPage: 1,
            perPage,
            categoryId: categoryName,
            controller: controller,
          })
        );
      }
      return () => {
        controller.abort();
      };
    },
    [dispatch, categoryName, perPage, isLogged]
  );

  const clearSearch = () => {
    const controller = new AbortController();

    if (isLogged && categoryName === 'own') {
      dispatch(
        noticesOperations.fetchNoticesOwn({
          pattern: '',
          currentPage: 1,
          perPage,
          controller: controller,
        })
      );
    } else if (isLogged && categoryName === 'favorite') {
      dispatch(
        noticesOperations.fetchNoticesFavorites({
          pattern: '',
          currentPage: 1,
          perPage,
          controller: controller,
        })
      );
    } else {
      dispatch(
        noticesOperations.fetchNoticesForAll({
          pattern: '',
          currentPage: 1,
          perPage,
          categoryId: categoryName,
          controller: controller,
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

      if (isLogged && categoryName === 'own') {
        dispatch(
          noticesOperations.fetchNoticesOwn({
            pattern,
            currentPage,
            perPage,
            controller: controller,
          })
        );
      } else if (isLogged && categoryName === 'favorite') {
        dispatch(
          noticesOperations.fetchNoticesFavorites({
            pattern,
            currentPage,
            perPage,
            controller: controller,
          })
        );
      } else {
        dispatch(
          noticesOperations.fetchNoticesForAll({
            pattern,
            currentPage,
            perPage,
            categoryId: categoryName,
            controller: controller,
          })
        );
      }
      dispatch(noticesOperations.setCurrentPage(currentPage));

      return () => {
        controller.abort();
      };
    },
    [dispatch, noticesStore.pattern, perPage, categoryName, isLogged]
  );

  const showPagination = useCallback(() => {
    if (!noticesStore.totalPages) {
      return <></>;
    }

    return (
      <Pagination
        page={noticesStore.currentPage}
        count={noticesStore.totalPages}
        variant="outlined"
        onChange={handleSwitchPage}
      />
    );
  }, [noticesStore.totalPages, noticesStore.currentPage, handleSwitchPage]);

  return (
    <NoticesPageContainer>
      <Title>Find your favorite pet</Title>

      <NoticesSearch
        pattern={noticesStore.pattern}
        onSubmit={haldleFormSubmit}
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
