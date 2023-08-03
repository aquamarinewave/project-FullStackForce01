import { NotFoundContainer, NotFoundText } from './ContentNotFound.styled';

const ContentNotFound = ({ notFoundText, pageError }) => {
  return (
    <NotFoundContainer>
      <NotFoundText>{notFoundText}</NotFoundText>
      {pageError && <div>{pageError}</div>}
    </NotFoundContainer>
  );
};

export default ContentNotFound;
