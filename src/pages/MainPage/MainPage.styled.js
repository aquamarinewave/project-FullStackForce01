import styled from 'styled-components';

import BgLagre from '../../images/x1/bg/bgLagre.png';
import BgMedium from '../../images/x1/bg/bgMedium.png';
import BgSmall from '../../images/x1/bg/bgSmall.png';

export const Title = styled.h1`
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

export const Picture = styled.picture`
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 27px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -293px;
    right: 15px;
  }
`;

export const MainPageDiv = styled.div`
  background-image: url(${BgSmall});

  @media screen and (min-width: 768px) {
    background-image: url(${BgMedium});
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    background-image: url(${BgLagre});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
