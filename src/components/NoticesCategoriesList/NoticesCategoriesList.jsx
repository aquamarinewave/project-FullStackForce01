import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { fetchByCategory } from '../../services/api/noticesFetch';

const NoticesCategoriesList = () => {
  const [resByCategory, setResByCategory] = useState();
  console.log('resByCategory:', resByCategory);
  const { categoryName } = useParams();

  useEffect(() => {
    if (!categoryName) return;

    const controller = new AbortController();

    async function fetchDataByCategory() {
      try {
        const response = await fetchByCategory(categoryName, controller);

        // if (response.data) return setResByCategory(null);

        response.data.map(({ notices }) => {
          return setResByCategory(notices);
        });
      } catch (error) {}
    }

    fetchDataByCategory();

    return () => {
      controller.abort();
    };
  }, [categoryName]);

  return (
    <div>
      {resByCategory && (
        <ul>
          {resByCategory.map(
            ({ _id, comments, title, birthday, category, location, name, owner, sex, type, avatarURL }) => {
              return (
                <li key={_id}>
                  <NoticeCategoryItem
                    responseByCategory={{
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
            }
          )}
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
