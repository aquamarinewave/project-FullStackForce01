import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';

const NoticesCategoriesList = ({ notices }) => {
  return (
    <div>
      {notices && (
        <ul>
          {notices.map(({ _id, comments, title, birthday, category, location, name, owner, sex, type, avatarURL }) => {
            return (
              <li key={_id}>
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
              </li>
            );
          })}
        </ul>
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
