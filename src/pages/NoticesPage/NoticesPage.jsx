import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import noticesSelector from 'redux/notices/noticesSelector';
import authSelector from 'redux/auth/authSelector';
import noticesOperations from 'redux/notices/operation';

import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import { AddPetButtonBox, NoticesPageContainer, Title } from './NoticesPage.styled';

import AddPetButton from 'components/AddPetButton/AddPetButton';

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
  console.log('category:', categoryName);
  const noticesStore = useSelector(noticesSelector.selectNotices);
  console.log('noticesStore:', noticesStore);
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
          page: 1,
          controller: controller,
        })
      );
    } else if (isLogged && categoryName === 'favorite') {
      dispatch(
        noticesOperations.fetchNoticesFavorites({
          page: 1,
          controller: controller,
        })
      );
    } else {
      dispatch(
        noticesOperations.fetchNoticesForAll({
          pattern: '',
          page: 1,
          categoryId: categoryName,
          controller: controller,
        })
      );
    }

    return () => {
      controller.abort();
    };
  }, [dispatch, categoryName, isLogged, setStatus, PENDING]);

  const showResults = useCallback(
    status => {
      switch (status) {
        case IDLE:
          return <div>Please, type something to the search</div>;
        case PENDING:
          return <div>Loading....</div>;
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

      dispatch(
        noticesOperations.fetchNoticesForAll({
          pattern: query,
          page: 1,
          categoryId: categoryName,
          controller: controller,
        })
      );

      dispatch(noticesOperations.setPattern(query));
      return () => {
        controller.abort();
      };
    },
    [dispatch, categoryName]
  );

  const clearSearch = () => {
    const controller = new AbortController();

    dispatch(
      noticesOperations.fetchNoticesForAll({
        pattern: '',
        page: 1,
        categoryId: categoryName,
        controller: controller,
      })
    );

    dispatch(noticesOperations.setPattern(''));
    return () => {
      controller.abort();
    };
  };

  return (
    <NoticesPageContainer>
      <Title>Find your favorite pet</Title>

      <NoticesSearch pattern={noticesStore.pattern} onSubmit={haldleFormSubmit} onClear={clearSearch} />
      <NoticesCategoriesNav />
      <AddPetButtonBox>
        <AddPetButton></AddPetButton>
      </AddPetButtonBox>

      {showResults(status)}
    </NoticesPageContainer>
  );
};

export default NoticesPage;
