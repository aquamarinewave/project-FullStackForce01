import LogoBig from '../../images/x1/logo/LogoDefault.png';
import LogoSmall from '../../images/x1/logo/LogoSmall.png';
import { NavLink } from 'react-router-dom';

// const handleImageSrc = src => {
//   switch (src) {
//     case 'big':
//           return `${ LogoImageBig }`;
//     case 'small':
//       return `${LogoImageSmall}`;
//     default:
//       return LogoImageSmall;
//   }
// };

// const image =  ({ src }) => handleImageSrc(src);

// const Logo = ({width, src}) => {
//     return (<MainLogo src={LogoImageBig} alt={'Logo'} />)
// }

// export default Logo;

const Logo = () => {
  return (
    <NavLink to="/">
      <picture>
        <source srcSet={LogoSmall} media="(max-width: 767px)" />
        <img src={LogoBig} alt="Logo" />
      </picture>
    </NavLink>
  );
};

export default Logo;
