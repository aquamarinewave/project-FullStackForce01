import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/user" component={<RegisterPage />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/notices" component={<LoginPage />} />} />
          <Route path="/user" element={<PrivateRoute redirectTo="/notices" component={<UserPage />} />} />
          <Route path="/add-pet" element={<AddPetPage />} />
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
          <Route path="/notices" element={<Navigate to="/notices/sell" />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
