import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageHeader = styled.h2`
  padding-top: 80px;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const NewsItem = styled.div`
  width: 400px;
`;

export const ReadMoreBtn = styled(Link)`
  width: 100px;
  padding: 3px 7px;
  cursor: pointer;
  color: var(--dark-blue);
  border-radius: 40px;

  &:hover {
    background-color: var(--lightblue);
  }
`;
