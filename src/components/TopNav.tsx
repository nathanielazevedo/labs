import AppBar from '@mui/material/AppBar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DarkMode, LightMode } from '@mui/icons-material';
import { setMode } from '../features/labs/labsSlice';

function TopNav() {
  const lab = useSelector((state: any) => state.lab.myLab);
  const dispatch = useDispatch();
  const theme = useTheme();

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
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant='subtitle1'
        sx={{
          minWidth: 'fit-content',
        }}
      >
        / main / labs / {lab?.lab_name && lab.lab_name.toLowerCase()}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            minWidth: 'fit-content',
          }}
        >
          {lab?.lab_name && lab.lab_name}
        </Typography>
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
