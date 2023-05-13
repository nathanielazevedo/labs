import './App.css';
import { useMemo } from 'react';
import Router from './features/Router';
import { themeSettings } from './theme';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const App = () => {
  const mode = useSelector((state: any) => state.lab.mode);
  console.log(mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <BrowserRouter basename='/labs'>
      <ThemeProvider theme={theme}>
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
};

export default App;
