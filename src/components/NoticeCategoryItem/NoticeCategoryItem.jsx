import { NavLink } from 'react-router-dom';
import Pet from '../../images/petPhoto/pet-photo-small.jpg';
import Icon from '../../utils/Icon/Icon';

const NoticeCategoryItem = ({ comments }) => {
  console.log('comments:', comments);

  return (
    <div>
      <img src={Pet} alt="pet" />
      <button type="button">
        <Icon name="heart" color="var(--dark-blue)" size={18} />
      </button>
      <NavLink to="/add-pet">Add pet</NavLink>
      <h3>{comments}</h3>
      <button type="button">Learn more</button>
    </div>
  );
};

export default NoticeCategoryItem;
