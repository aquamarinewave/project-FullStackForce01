import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('../pages/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage'));
const UserPage = lazy(() => import('../pages/UserPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route path="/notices/:categoryName" element={<NoticesPage />} />
        </Route>
        <Route path="/news" element={<NewsPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
