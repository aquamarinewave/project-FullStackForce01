import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelector from 'redux/auth/authSelector';
import { fetchByCategory, fetchByCategoryAuth } from '../../services/api/noticesFetch';

const NoticesCategoriesList = () => {
  const [resByCategory, setResByCategory] = useState();
  console.log('resByCategory:', resByCategory);
  const { categoryName } = useParams();
  const isLogged = useSelector(authSelector.loggedInSelector);
  console.log('isLogged:', useSelector(authSelector.loggedInSelector));

  useEffect(() => {
    if (!categoryName) return;

    const controller = new AbortController();

    async function fetchDataByCategory() {
      try {
        if (isLogged && categoryName === 'own' && categoryName === 'favorite') {
          const response = await fetchByCategoryAuth(categoryName, controller);
          response.data.map(({ notices }) => {
            return setResByCategory(notices);
          });
        }
        const response = await fetchByCategory(categoryName, controller);

        // if (response.data) return setResByCategory(null);

        response.data.map(({ notices }) => {
          return setResByCategory(notices);
        });
      } catch (e) {
        console.log(e.message);
      }
    }

    fetchDataByCategory();

    return () => {
      controller.abort();
    };
  }, [categoryName, isLogged]);

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
