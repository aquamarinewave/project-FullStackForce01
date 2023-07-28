import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({ news }) => {
  return (
    <div>
      {news && news.length && (
        <ul>
          {news.map(({ _id, title, url, imgUrl, text, date }) => {
            return (
              <li key={_id}>
                <NewsItem
                  responseByNews={{
                    title,
                    url,
                    imgUrl,
                    text,
                    date,
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
