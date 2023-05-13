import React from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  Link as Linkm,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../features/labs/labsSlice';
import { DarkMode, LightMode } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';

function TopNav() {
  const theme = useTheme();
  const dispatch = useDispatch();
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
      <Breadcrumbs>
        <Link to='/'>
          <Linkm
            color='gray'
            underline='hover'
            sx={{
              minWidth: 'fit-content',
            }}
          >
            srl
          </Linkm>
        </Link>
        <Link to='/search'>
          <Linkm
            color='gray'
            underline='hover'
            sx={{
              minWidth: 'fit-content',
            }}
          >
            search
          </Linkm>
        </Link>
        <Typography
          variant='subtitle1'
          sx={{
            minWidth: 'fit-content',
          }}
        >
          {lab?.lab_name && lab.lab_name.toLowerCase()}
        </Typography>
      </Breadcrumbs>
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
