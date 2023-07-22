import { NavLink } from 'react-router-dom';
import Pet from '../../images/petPhoto/pet-photo-small.jpg';
import Icon from '../../utils/Icon/Icon';

const NoticeCategoryItem = () => {
  return (
    <div>
      <img src={Pet} alt="pet" />
      <button type="button">
        <Icon name="heart" color="#ff520e" size={18} />
      </button>
      <NavLink to="/add-pet">Add pet</NavLink>
      <h3>Сute dog looking for a home</h3>
      <button type="button">Learn more</button>
    </div>
  );
};

export default NoticeCategoryItem;
