import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Smallbg from '../../images/x1/bg/bgSmall.png';
import SmallbgRetina from '../../images/x2/bg/bgSmall.png';
import Mediumbg from '../../images/x1/bg/bgMedium.png';
import MediumbgRetina from '../../images/x2/bg/bgMedium.png';
import Largebg from '../../images/x1/bg/bgLagre.png';
import LargebgRetina from '../../images/x2/bg/bgLarge.png';

export const PageHeader = styled.h2`
  padding-top: 50px;
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  height: 1000px;
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

export const LinkBtn = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  backgroung-color: blue;
`;
