import styled from 'styled-components';
import { Pagination as MuiPagination } from '@mui/material';

export const PaginationList = styled(MuiPagination)`
  display: flex;
  justify-content: center;

  margin: 40px 0;
  @media screen and (min-width: 768px) {
    margin: 30px 0;
  }
  @media screen and (min-width: 1280x) {
    margin: 38px 0;
  }
`;
