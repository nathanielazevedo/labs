import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Router from './features/Router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#060816',
      paper: '#060816',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box
          display='flex'
          flexDirection='column'
          sx={{ height: '100vh', width: '100vw' }}
        >
          <CssBaseline />
          <Router />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
