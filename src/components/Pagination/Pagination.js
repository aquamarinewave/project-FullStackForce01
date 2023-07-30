import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ page, count, onChange }) => {
  return <MuiPagination page={page} count={count} variant="outlined" onChange={onChange} />;
};

export default Pagination;
