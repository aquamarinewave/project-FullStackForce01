import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import Header from '../Header/Header';

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
