import React from 'react';
import { PaginationList } from './Pagination.styled.';
import { PaginationItem } from '@mui/material';
import KeyboardBackspaceOutlined from '@mui/icons-material/KeyboardBackspaceOutlined';
import TrendingFlatOutlined from '@mui/icons-material/TrendingFlatOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#54ADFF',
    },
    secondary: {
      main: '#FEF9F9',
    },
  },
});

const Pagination = ({ page, count, onChange }) => {
  return (
    <ThemeProvider theme={theme}>
      <PaginationList
        page={page}
        count={count}
        variant="outlined"
        onChange={onChange}
        renderItem={item => (
          <PaginationItem
            sx={{
              '&.Mui-selected': {
                background: '#54ADFF',
                color: '#FEF9F9',
                border: 'none',
              },
              borderColor: '#54ADFF',
              fill: '#54ADFF',
              stroke: '#54ADFF',
            }}
            slots={{ previous: KeyboardBackspaceOutlined, next: TrendingFlatOutlined }}
            {...item}
          />
        )}
      />
    </ThemeProvider>
  );
};

export default Pagination;
