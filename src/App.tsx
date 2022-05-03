import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import AppRouter from './router';
import mainTheme from "./themes/main"
function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppRouter/>
    </ThemeProvider>

  );
}

export default App;
