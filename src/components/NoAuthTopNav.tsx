import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMode } from '../features/labs/labsSlice';
import { DarkMode, LightMode } from '@mui/icons-material';

function TopNav() {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <AppBar
      position='fixed'
      elevation={0}
      sx={{
        height: '50px',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0 25px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'relative',
      }}
    >
      <Link to='/'>
        <Typography
          variant='subtitle1'
          sx={{
            minWidth: 'fit-content',
          }}
        >
          Scientific Research Labs
        </Typography>
      </Link>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Link to='/search'>
          <Typography
            variant='subtitle1'
            sx={{
              minWidth: 'fit-content',
            }}
          >
            Back to Search
          </Typography>
        </Link>
        <IconButton
          onClick={() => dispatch(setMode())}
          sx={{
            justifySelf: 'flex-end',
          }}
        >
          {theme.palette.mode === 'dark' ? (
            <DarkMode sx={{ fontSize: '25px' }} />
          ) : (
            <LightMode sx={{ color: 'black', fontSize: '25px' }} />
          )}
        </IconButton>
      </Box>
    </AppBar>
  );
}

export default TopNav;
