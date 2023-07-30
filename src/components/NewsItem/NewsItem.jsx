import {
  ReadMoreBtn,
  NewsItemWrapper,
  Img,
  ImgWrapper,
  Title,
  ContentContainer,
  BottomContainer,
  Description,
  DateD,
} from './NewsItem.styled';

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
      {imgUrl && (
        <ImgWrapper>
          <Img src={imgUrl} alt={title} />
        </ImgWrapper>
      )}
      <ContentContainer>
        <Title>{title} </Title>
        <Description>{text}</Description>
        <DateD>{formatDate(date)}</DateD>
        <ReadMoreBtn href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </ReadMoreBtn>
      </ContentContainer>
    </NewsItemWrapper>
  );
};

export default NewsItem;
