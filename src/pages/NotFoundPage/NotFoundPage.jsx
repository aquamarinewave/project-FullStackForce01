import { PageHeader, BackgroundImage } from './NotFoundPage.styled';
import { LinkBtn } from './NotFoundPage.styled';
import Icon from '../../utils/Icon/Icon'; // Path to your icons.svg
import Smallpng from '../../images/x1/page404/404Small.png';
import Small from '../../images/x1/page404/404Small.webp';
import SmallRetina from '../../images/x2/page404/404Small.webp';
import Medium from '../../images/x1/page404/404Medium.webp';
import MediumRetina from '../../images/x2/page404/404Medium.webp';
import Large from '../../images/x1/page404/404Large.webp';
import LargeRetina from '../../images/x2/page404/404Large.png';

const NotFoundPage = () => {
  return (
    <div>
      <BackgroundImage>
        <PageHeader>Ooops! This page not found :</PageHeader>
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet={`${Small} 1x, 
              ${SmallRetina} 2x
        `}
            type="image/webp"
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${Medium} 1x,
              ${MediumRetina} 2x
        `}
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${Large} 1x,
              ${LargeRetina} 2x
        `}
            type="image/webp"
          />
          <img src={Smallpng} alt="error-404" />
        </picture>

        <LinkBtn to="/main">
          To main page <Icon name="pawprint-1" color="#FFFFFF" size={35} />
        </LinkBtn>
      </BackgroundImage>
    </div>
  );
};

export default NotFoundPage;
