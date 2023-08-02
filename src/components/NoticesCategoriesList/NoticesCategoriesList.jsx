import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { Item, List } from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <div>
      {notices && (
        <List>
          {notices.map(
            ({
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
              favorite,
              allowDelete,
            }) => {
              return (
                <Item key={_id}>
                  <NoticeCategoryItem
                    notice={{
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
                      favorite,
                      allowDelete,
                    }}
                  />
                </Item>
              );
            }
          )}
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
