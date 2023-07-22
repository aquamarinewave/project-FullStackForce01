import LogoImageBig from '../../images/x1/logo/LogoDefault.png';
import LogoImageSmall from '../../images/x1/logo/LogoSmall.png';
import MainLogo from './Logo.styled';

const handleImageSrc = src => {
  switch (src) {
    case 'big':
          return `${ LogoImageBig }`;
    case 'small':
      return `${LogoImageSmall}`;
    default:
      return LogoImageSmall;
  }
};
 
const image =  ({ src }) => handleImageSrc(src);

const LogoSmall = ({width, src}) => {
    return (<MainLogo width={width} src={LogoImageSmall} alt={'Logo'} />)
}

export default LogoSmall;