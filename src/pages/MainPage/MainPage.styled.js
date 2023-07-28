import styled from 'styled-components';

import Smallbg from '../../images/x1/bg/bg-small.png';
import SmallbgRetina from '../../images/x2/bg/bg-small.png';
import Mediumbg from '../../images/x1/bg/bg-medium.png';
import MediumbgRetina from '../../images/x2/bg/bg-medium.png';
import Largebg from '../../images/x1/bg/bg-lagre.png';
import LargebgRetina from '../../images/x2/bg/bg-large.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
   @media screen and (min-width: 768px) {

   }
  @media screen and (min-width: 1280px) {
    position: relative;
  }
`;

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
    margin-left: calc((100% - 1246px) / 2);
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
    weight: 768px;
    ${'' /* position: absolute;
    left: 0;
    top: 240px; */}
   
 margin-left: auto;
    margin-right: auto; 
    }
  }

  @media screen and (min-width: 1280px) {
    width: 917px;
    height: 851px;
    position: absolute;
    margin-top: 0px;
    left: 275px;
    top: -60px;
    right: calc((100% - 1314px) / 2);
  }
`;

export const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: url(${Smallbg});
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${SmallbgRetina});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${Mediumbg});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${MediumbgRetina});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${Largebg});
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${LargebgRetina});
    }
  }
`;
