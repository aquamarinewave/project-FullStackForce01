import Icons from '../../images/icons.svg'; // Path to your icons.svg

const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} stroke={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export default Icon;
