import NewsItem from '../NewsItem/NewsItem';
import { Item, List } from './NewsList.styled';
import DefaultImg from '../../images/x1/petphoto/pet-photo-large.jpg';

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
                    imgUrl: imgUrl || DefaultImg,
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
