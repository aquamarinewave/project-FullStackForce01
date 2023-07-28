import { NavLink } from 'react-router-dom';

import Largepng from '../../images/x1/logo/logo-default.png';
import Large from '../../images/x1/logo/logo-default.webp';
import LargeRetina from '../../images/x2/logo/logo-default.webp';
import Smallpng from '../../images/x1/logo/logo-small.png';
import Small from '../../images/x1/logo/logo-default.webp';
import SmallRetina from '../../images/x2/logo/logo-default.webp';

import { MainLogo } from './Logo.styled';

import { useWindowWidth } from '@react-hook/window-size';


const Logo = () => {
const width = useWindowWidth();
  
  return (
    <NavLink to="/">
      {width >= 768 && (
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${Large} 1x, 
              ${LargeRetina} 2x
        `}
            type="image/webp"
          />
          <MainLogo src={Largepng} alt="Logo" />
        </picture>
      )}
      {width < 768 && (
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={`${Small} 1x, 
              ${SmallRetina} 2x
        `}
            type="image/webp"
          />
          <MainLogo src={Smallpng} alt="Logo" />
        </picture>
      )}
    </NavLink>
  );
};

export default Logo;
