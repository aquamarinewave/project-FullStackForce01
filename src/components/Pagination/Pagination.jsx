import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';
import { PaginationList } from './Pagination.styled.';

const Pagination = ({ page, count, onChange }) => {
  return <PaginationList page={page} count={count} variant="outlined" onChange={onChange} />;
};

export default Pagination;
