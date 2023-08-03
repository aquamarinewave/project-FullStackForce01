import React from 'react';

import { Wrapper, Title, ImgBlock, Picture, ImgPic } from './MainPage.styled';

import PetsLargeDef from '../../images/x1/homepagefull/pets-large.png';
import PetsLarge from '../../images/x1/homepagefull/pets-large.webp';
import PetsMedium from '../../images/x1/homepage/pets-medium.webp';
import PetsSmall from '../../images/x1/homepage/pets-small.webp';

import PetsLargeX2 from '../../images/x2/homepagefulll/pets-large-2x.webp';
import PetsMediumX2 from '../../images/x2/homepage/pets-medium.webp';
import PetsSmallX2 from '../../images/x2/homepage/pets-small.webp';

const MainPage = () => {
  return (
    <>
      <Wrapper>
        <Title>Take good care of your small pets</Title>
        <ImgBlock>
          <Picture>
            <source media="(min-width: 1280px)" srcSet={`${PetsLarge} 1x, ${PetsLargeX2} 2x`} type="image/webp" />
            <source media="(min-width: 768px)" srcSet={`${PetsMedium} 1x, ${PetsMediumX2} 2x`} type="image/webp" />
            <source media="(max-width: 767px)" srcSet={`${PetsSmall} 1x, ${PetsSmallX2} 2x`} type="image/webp" />
            <ImgPic src={PetsLargeDef} alt="Pictures small pets" />
          </Picture>
        </ImgBlock>
      </Wrapper>
    </>
  );
};

export default MainPage;
