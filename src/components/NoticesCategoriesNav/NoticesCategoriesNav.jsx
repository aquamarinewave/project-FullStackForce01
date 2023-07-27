import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { CategoriesNavContainer, CategoriesLink } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  const isLogged = useSelector(authSelector.loggedInSelector);

  return (
    <CategoriesNavContainer>
      <CategoriesLink to="/notices/sell">sell</CategoriesLink>
      <CategoriesLink to="/notices/lost-found">lost/found</CategoriesLink>
      <CategoriesLink to="/notices/for-free">in good hands</CategoriesLink>
      {isLogged && <CategoriesLink to="/notices/favorite">favorite ads</CategoriesLink>}
      {isLogged && <CategoriesLink to="/notices/own">my ads</CategoriesLink>}
    </CategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
