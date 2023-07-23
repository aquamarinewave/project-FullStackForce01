import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

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
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route path=":categoryName" element={<NoticesPage />} />
        </Route>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
