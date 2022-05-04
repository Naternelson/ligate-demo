import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import AppRouter from './router';
import main from './themes/main';
function App() {
  return (
    <ThemeProvider theme={main}>
      <AppRouter/>
    </ThemeProvider>

  );
}

export default App;
