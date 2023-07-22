import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Small from '../../images/x1/page404/404Small.png';
import SmallRetina from '../../images/x2/page404/404Small.png';
import Medium from '../../images/x1/page404/404Medium.png';
import MediumRetina from '../../images/x2/page404/404Medium.png';
import Large from '../../images/x1/page404/404Large.png';
import LargeRetina from '../../images/x2/page404/404Large.png';

export const PageHeader = styled.h2`
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const BackgroundImage = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${Small});
  height: 123px;
  @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
    background-image: url(${SmallRetina});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${Medium});
    height: 308px;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${MediumRetina});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${Large});
    height: 360px;
    @media (min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx) {
      background-image: url(${LargeRetina});
    }
  }
`;

export const LinkBtn = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  backgroung-color: blue;
`;
