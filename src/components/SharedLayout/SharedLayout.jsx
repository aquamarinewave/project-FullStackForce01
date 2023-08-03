import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import Header from '../Header/Header';
import Background from 'components/Background/Background';

const SharedLayout = () => {
  return (
    <Container>
      <Background />
      <Header />
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default SharedLayout;
