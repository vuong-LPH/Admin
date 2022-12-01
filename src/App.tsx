import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {useGetCustomerQuery} from './generated'
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import React from 'react';

function App() {
  const content = useRoutes(router);
  // const {data} = useGetCustomerQuery();
  // console.log(data);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
