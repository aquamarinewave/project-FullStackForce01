import NoticeCategoryItem from 'components/NoticeCategoryItem/NoticeCategoryItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NoticesCategoriesList = () => {
  const [resByCategory, setResByCategory] = useState();
  const { categoryName } = useParams();
  console.log('categoryName:', categoryName);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchByCategoty = searchParams.get(categoryName);
  // console.log('searchByCategoty:', searchByCategoty);

  useEffect(() => {
    if (!categoryName) return;

    const controller = new AbortController();

    axios.defaults.baseURL = 'https://fullstackforce.onrender.com/api';
    axios.defaults.params = {
      category: `${categoryName}`,
    };

    async function fetchByCategory() {
      try {
        const response = await axios.get('/notices', {
          signal: controller.signal,
        });

        setResByCategory(response.data);
      } catch (error) {}
    }

    fetchByCategory();

    return () => {
      controller.abort();
    };
  }, [categoryName]);

  return (
    <div>
      {resByCategory && (
        <ul>
          {resByCategory.map(({ _id, comments }) => {
            return (
              <li key={_id}>
                <NoticeCategoryItem comments={comments} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default NoticesCategoriesList;
