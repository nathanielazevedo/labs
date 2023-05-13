import './App.css';
import { useMemo } from 'react';
import Router from './features/Router';
import { themeSettings } from './theme';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { setModeInitial } from './features/labs/labsSlice';

const App = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: any) => state.lab.mode);
  if (!mode) {
    const mode = localStorage.getItem('mode');
    if (mode) {
      dispatch(setModeInitial(mode));
    } else {
      dispatch(setModeInitial('dark'));
    }
  }
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
