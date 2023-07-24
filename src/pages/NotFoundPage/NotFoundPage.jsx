import { PageHeader, BackgroundImage, LinkBtn, Wrapper, ImageError, BtnText } from './NotFoundPage.styled';
import Smallpng from '../../images/x1/page404/404Small.png';
import Small from '../../images/x1/page404/404Small.webp';
import SmallRetina from '../../images/x2/page404/404Small.webp';
import Medium from '../../images/x1/page404/404Medium.webp';
import MediumRetina from '../../images/x2/page404/404Medium.webp';
import Large from '../../images/x1/page404/404Large.webp';
import LargeRetina from '../../images/x2/page404/404Large.png';
import Icon from '../../utils/Icon/Icon'; // Path to your icons.svg

const NotFoundPage = () => {
  return (
    <Wrapper>
      <BackgroundImage>
        <PageHeader>Ooops! This page not found :</PageHeader>
        <ImageError>
          <source
            media="(min-width: 1280px)"
            srcSet={`${Large} 1x, 
              ${LargeRetina} 2x
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
            srcSet={`${Small} 1x,
              ${SmallRetina} 2x
        `}
            type="image/webp"
          />
          <img src={Smallpng} alt="error-404" />
        </ImageError>

        <LinkBtn to="/">
          <BtnText>To main page</BtnText> <Icon name="pawprint-1" color="#FFFFFF" size={24} />
        </LinkBtn>
      </BackgroundImage>
    </Wrapper>
  );
};

export default NotFoundPage;
