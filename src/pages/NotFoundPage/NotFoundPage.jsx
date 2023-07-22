import { BackgroundImage } from './NotFoundPage.styled';
import { PageHeader } from './NotFoundPage.styled';
import { LinkBtn } from './NotFoundPage.styled';
import Icon from '../../utils/Icon/Icon'; // Path to your icons.svg

const NotFoundPage = () => {
  return (
    <div>
      <PageHeader>Ooops! This page not found :</PageHeader>
      <BackgroundImage></BackgroundImage>
      <LinkBtn to="/main">
        To main page <Icon name="pawprint-1" color="#FFFFFF" size={35} />
      </LinkBtn>
    </div>
  );
};

export default NotFoundPage;
