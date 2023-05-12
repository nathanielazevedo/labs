import React from 'react';
import AppBar from '@mui/material/AppBar';
import { TextField, Typography } from '@mui/material';
import Menu from './Menu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TopNav() {
  const lab = useSelector((state: any) => state.lab.lab);

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
      {/* <TextField
        id='outlined-basic'
        placeholder='Search for a lab'
        sx={{
          maxWidth: '70%',
          width: '70%',
          '& .MuiInputBase-root': {
            height: '30px',
            color: 'white',
            // '& fieldset': {
            //   borderColor: 'white',
            // },
            // '&:hover fieldset': {
            //   borderColor: 'white',
            // },
            // '&.Mui-focused fieldset': {
            //   borderColor: 'white',
            // },
          },
        }}
      /> */}
    </AppBar>
  );
}

export default TopNav;
