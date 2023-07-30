import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { Item, List } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <div>
      {notices && (
        <List>
          {notices.map(({ _id, comments, title, birthday, category, location, name, owner, sex, type, avatarURL }) => {
            return (
              <Item key={_id}>
                <NoticeCategoryItem
                  notices={{
                    _id,
                    comments,
                    title,
                    birthday,
                    category,
                    location,
                    name,
                    owner,
                    sex,
                    type,
                    avatarURL,
                  }}
                />
              </Item>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default NoticesCategoriesList;

// <div>
//   {!resByCategory ? (
//     <Navigate to="*" />
//   ) : (
//     <ul>
//       {resByCategory.map(({ _id, comments, title, birthday, category, location, name, owner, sex, type }) => {
//         return (
//           <li key={_id}>
//             <NoticeCategoryItem
//               responseByCategory={{ _id, comments, title, birthday, category, location, name, owner, sex, type }}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   )}
// </div>;

// <div>
//   {resByCategory && (
//     <ul>
//       {resByCategory.map(({ _id, comments, title, birthday, category, location, name, owner, sex, type }) => {
//         return (
//           <li key={_id}>
//             <NoticeCategoryItem
//               responseByCategory={{ _id, comments, title, birthday, category, location, name, owner, sex, type }}
//             />
//           </li>
//         );
//       })}
//     </ul>
//   )}
// </div>;
