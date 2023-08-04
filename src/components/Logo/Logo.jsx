import { NavLink } from 'react-router-dom';
import Large from '../../images/x1/logo/logo-default.webp';
import LargeRetina from '../../images/x2/logo/logo-default.webp';
import Smallpng from '../../images/x1/logo/logo-small.png';
import Small from '../../images/x1/logo/logo-small.webp';
import SmallRetina from '../../images/x2/logo/logo-small.webp';

const Logo = ({ closeMenu, isMobile }) => {
  return isMobile ? (
    <NavLink to="/" onClick={() => closeMenu()}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${Large} 1x, 
              ${LargeRetina} 2x
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
        <img src={Smallpng} alt="Logo" />
      </picture>
    </NavLink>
  ) : (
    <NavLink to="/">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${Large} 1x, 
              ${LargeRetina} 2x
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
        <img src={Smallpng} alt="Logo" />
      </picture>
    </NavLink>
  );
};

export default Logo;
