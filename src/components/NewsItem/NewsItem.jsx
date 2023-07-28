import { ReadMoreBtn, NewsItemWrapper } from './NewsItem.styled';

const formatDate = date => {
  const formatedDate = new Date(date);
  const day = formatedDate.getDate();
  const month = formatedDate.getMonth() + 1;
  const year = formatedDate.getFullYear();

  return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
};
const NewsItem = ({ responseByNews }) => {
  const { title, url, imgUrl, text, date } = responseByNews;
  return (
    <NewsItemWrapper>
      {imgUrl && <img src={imgUrl} alt={title} />}
      <h3>{title} </h3>
      <p>{text}</p>
      <div>{formatDate(date)}</div>
      <ReadMoreBtn href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </ReadMoreBtn>
    </NewsItemWrapper>
  );
};

export default NewsItem;
