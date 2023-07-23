import React from 'react';

import { Title, BackgroundImage, Wrapper, Picture } from './MainPage.styled';

import PetsLargeDef from '../../images/x1/homePage/PetsLarge.png';
import PetsLarge from '../../images/x1/homePage/PetsLarge.webp';
import PetsMedium from '../../images/x1/homePage/PetsMedium.webp';
import PetsSmall from '../../images/x1/homePage/PetsSmall.webp';

import PetsLargeX2 from '../../images/x2/homePage/PetsLarge.webp';
import PetsMediumX2 from '../../images/x2/homePage/PetsMedium.webp';
import PetsSmallX2 from '../../images/x2/homePage/PetsSmall.webp';

const MainPage = () => {
  return (
    <>
      <Wrapper>
      <BackgroundImage>
        <Title>Take good care of your small pets</Title>
        <Picture className="about__img">
          <source media="(min-width: 1280px)" srcSet={`${PetsLarge} 1x, ${PetsLargeX2} 2x`} type="image/webp" />
          <source media="(min-width: 768px)" srcSet={`${PetsMedium} 1x, ${PetsMediumX2} 2x`} type="image/webp" />
          <source media="(max-width: 767px)" srcSet={`${PetsSmall} 1x, ${PetsSmallX2} 2x`} type="image/webp" />
          <img src={PetsLargeDef} alt="Pictures small pets" />
        </Picture>
        </BackgroundImage>
      </Wrapper>
    </>
  );
};

export default MainPage;
