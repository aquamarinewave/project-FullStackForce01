import { PageHeader, LinkBtn, ImageError, BtnText, IconPawPrint, LinkWrapper, Wrapper } from './NotFoundPage.styled';
import Smallpng from '../../images/x1/page404/404-small.png';
import Small from '../../images/x1/page404/404-small.webp';
import SmallRetina from '../../images/x2/page404/404-small.webp';
import Medium from '../../images/x1/page404/404-medium.webp';
import MediumRetina from '../../images/x2/page404/404-medium.webp';
import Large from '../../images/x1/page404/404-large.webp';
import LargeRetina from '../../images/x2/page404/404-large.png';
import sprite from '../../images/icons.svg';

const NotFoundPage = () => {
  return (
    <Wrapper>
      <div>
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
        <LinkWrapper>
          <LinkBtn to="/">
            <BtnText>To main page</BtnText>
            <IconPawPrint width={24} height={24}>
              <use href={`${sprite}#icon-pawprint-1`}></use>
            </IconPawPrint>
          </LinkBtn>
        </LinkWrapper>
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
