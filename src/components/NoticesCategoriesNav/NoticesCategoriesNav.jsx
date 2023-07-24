import { CategoriesNavContainer, CategoriesLink } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = () => {
  return (
    <CategoriesNavContainer>
      <CategoriesLink to="/notices/sell">sell</CategoriesLink>
      <CategoriesLink to="/notices/lost-found">lost/found</CategoriesLink>
      <CategoriesLink to="/notices/for-free">in good hands</CategoriesLink>
    </CategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
