import { useState, useEffect } from 'react';
import { fetchByNews } from '../../services/api/newsFetch';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = () => {
  const [resByVews, setResByNews] = useState();

  useEffect(() => {
    async function fetchDataByNews() {
      try {
        const response = await fetchByNews();
        console.log(response.data[0].news);
        setResByNews(response.data[0].news);
      } catch (error) {}
    }

    fetchDataByNews();
  }, []);

  return (
    <div>
      {resByVews && (
        <ul>
          {resByVews.map(({ _id, title, url, imageUrl, text, data }) => {
            return (
              <li key={_id}>
                <NewsItem
                  responseByNews={{
                    title,
                    url,
                    imageUrl,
                    text,
                    data,
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

export default NewsList;
