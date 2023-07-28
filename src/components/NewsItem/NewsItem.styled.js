import styled from 'styled-components';

export const NewsItemWrapper = styled.div`
  width: 400px;
`;

export const ReadMoreBtn = styled.a`
  width: 100px;
  padding: 3px 7px;
  cursor: pointer;
  color: var(--dark-blue);
  border-radius: 40px;

  &:hover {
    background-color: var(--lightblue);
  }
`;
