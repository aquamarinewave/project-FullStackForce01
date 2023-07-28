import { ReadMoreBtn, NewsItemWrapper } from './NewsItem.styled';

const NewsItem = ({ responseByNews }) => {
  const { title, url, imageUrl, text, data } = responseByNews;

  return (
    <NewsItemWrapper>
      <img src={imageUrl} alt={title} />
      <h3>{title} </h3>
      <p>{text}</p>
      <div>{data}</div>
      <ReadMoreBtn href={url}>Read more</ReadMoreBtn>
    </NewsItemWrapper>
  );
};

export default NewsItem;
