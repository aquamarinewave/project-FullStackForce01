import { NavLink } from 'react-router-dom';

const NoticesCategoriesNav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/notices/sell">Home</NavLink>
        <NavLink to="/notices/lost-found">Home</NavLink>
        <NavLink to="/notices/for-free">Movies</NavLink>
      </nav>
    </div>
  );
};

export default NoticesCategoriesNav;
