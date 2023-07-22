import React from 'react';
import styled from 'styled-components';

import PetsLarge from '../images/x1/homePage/PetsLarge.png';
import PetsMedium from '../images/x1/homePage/PetsMedium.png';
import PetsSmall from '../images/x1/homePage/PetsSmall.png';

import PetsLargeX2 from '../images/x2/homePage/PetsLarge.png';
import PetsMediumX2 from '../images/x2/homePage/PetsMedium.png';
import PetsSmallX2 from '../images/x2/homePage/PetsSmall.png';

const Title = styled.h1`
  margin-top: 60px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  color: var(--main-color);
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.37;

  @media screen and (min-width: 768px) {
    margin-left: 32px;
    text-align: left;
    width: 588px;
    font-size: 68px;
    font-weight: 700;
    line-height: 100px;
  }

  @media screen and (min-width: 1280px) {
    text-align: left;
    margin-left: 18px;
    margin-top: 188px;
    width: 501px;
    font-weight: 800;
    line-height: 130%;
  }
`;

const MainPageImage = styled.img`
  margin: auto;
  width: 474px;

  @media screen and (min-width: 768px) {
    margin-top: 27px;
    width: 985px;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -293px;
    right: 15px;
    width: 954px;
  }
`;

const MainPageDiv = styled.div`
  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }
`;

const MainPage = () => {
  return (
    <>
      <MainPageDiv>
        <Title>Take good care of your small pets</Title>
        {window.devicePixelRatio > 1 ? (
          window.screen.width >= 1280 ? (
            <MainPageImage src={PetsLargeX2} alt="Pictures small pets x2" />
          ) : window.screen.width < 1280 && window.screen.width >= 768 ? (
            <MainPageImage src={PetsMediumX2} alt="Pictures small pets x2" />
          ) : (
            <MainPageImage src={PetsSmallX2} alt="Pictures small pets x2" />
          )
        ) : window.screen.width >= 1280 ? (
          <MainPageImage src={PetsLarge} alt="Pictures small pets" />
        ) : window.screen.width < 1280 && window.screen.width >= 768 ? (
          <MainPageImage src={PetsMedium} alt="Pictures small pets" />
        ) : (
          <MainPageImage src={PetsSmall} alt="Pictures small pets" />
        )}
      </MainPageDiv>
    </>
  );
};

export default MainPage;
