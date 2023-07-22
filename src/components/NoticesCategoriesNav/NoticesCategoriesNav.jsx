import { NavLink } from 'react-router-dom';

const NoticesCategoriesNav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/notices/sell">sell</NavLink>
        <NavLink to="/notices/lost-found">lost/found</NavLink>
        <NavLink to="/notices/for-free">in good hands</NavLink>
      </nav>
    </div>
  );
};

export default NoticesCategoriesNav;
