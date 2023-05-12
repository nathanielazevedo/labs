import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function TopNav() {
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
    </AppBar>
  );
}

export default TopNav;
