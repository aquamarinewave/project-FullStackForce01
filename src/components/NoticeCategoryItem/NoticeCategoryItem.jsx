import { NavLink } from 'react-router-dom';
import Pet from '../../images/petPhoto/pet-photo-small.jpg';
import Icons from '../../images/icons.svg';

const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size} height={size}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

const NoticeCategoryItem = () => {
  return (
    <div>
      <img src={Pet} alt="pet" />
      <button type="button">
        <Icon name="heart-min" color="#54adff" size={18} />
      </button>
      <NavLink to="/add-pet">Add pet</NavLink>
      <h3>Сute dog looking for a home</h3>
      <button type="button">Learn more</button>
    </div>
  );
};

export default NoticeCategoryItem;
