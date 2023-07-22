import LogoImageBig from '../../images/x1/logo/LogoDefault.png';
// import LogoImageSmall from '../../images/x1/logo/LogoSmall.png';
import MainLogo from './Logo.styled';

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

const Logo = ({width, src}) => {
    return (<MainLogo src={LogoImageBig} alt={'Logo'} />)
}

export default Logo;