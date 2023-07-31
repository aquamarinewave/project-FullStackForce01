import NewsItem from '../NewsItem/NewsItem';
import { Item, List } from './NewsList.styled';

const NewsList = ({ news }) => {
  return (
    <div>
      {news && news.length && (
        <List>
          {news.map(({ _id, title, url, imgUrl, text, date }) => {
            return (
              <Item key={_id}>
                <NewsItem
                  responseByNews={{
                    title,
                    url,
                    imgUrl,
                    text,
                    date,
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

export default NewsList;
