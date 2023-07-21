import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
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
