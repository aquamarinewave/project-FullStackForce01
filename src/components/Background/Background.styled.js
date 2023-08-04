import styled from 'styled-components';

import Smallbg from '../../images/x1/bg/bg-small.png';
import SmallbgRetina from '../../images/x2/bg/bg-small.png';
import Mediumbg from '../../images/x1/bg/bg-medium.png';
import MediumbgRetina from '../../images/x2/bg/bg-medium.png';
import Largebg from '../../images/x1/bg/bg-lagre.png';
import LargebgRetina from '../../images/x2/bg/bg-large.png';

export const BackgroundImageBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-attachment: scroll; */
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
  z-index: -1;
`;
