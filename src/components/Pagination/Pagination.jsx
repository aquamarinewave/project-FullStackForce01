import React from 'react';
import { PaginationList } from './Pagination.styled.';
import { PaginationItem } from '@mui/material';
import TrendingFlatOutlined from '@mui/icons-material/TrendingFlatOutlined';

const Pagination = ({ page, count, onChange }) => {
  return (
    <PaginationList
      page={page}
      count={count}
      variant="outlined"
      onChange={onChange}
      sx={{
        '& .MuiPagination-ul li:first-of-type': {
          marginRight: '20px',
          transform: 'rotate(180deg)',
        },
        '& .MuiPagination-ul li:last-of-type': {
          marginLeft: '20px',
        },
      }}
      renderItem={item => (
        <PaginationItem
          sx={{
            '&.Mui-selected': {
              background: '#54ADFF',
              color: '#FEF9F9',
              border: 'none',
            },
            '& .MuiPaginationItem-icon': {
              color: '#54ADFF',
            },
            borderColor: '#54ADFF',
            fill: '#54ADFF',
            stroke: '#54ADFF',
          }}
          slots={{ previous: TrendingFlatOutlined, next: TrendingFlatOutlined }}
          {...item}
        />
      )}
    />
  );
};

export default Pagination;
