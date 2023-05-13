import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { IconButton, useTheme } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setMode } from '../../features/labs/labsSlice';
import { Link as Linkm } from '@mui/material';

const NavBar = ({ show = true, text = 'Login / Signup' }: any) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <AppBar
      position='static'
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
      <Container sx={styles.container}>
        <Toolbar disableGutters>
          <Link to='/'>
            <Typography
              variant='h6'
              noWrap
              sx={{
                ...styles.name,
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
              }}
            >
              Scientific Research Labs
            </Typography>
          </Link>
          {show && (
            <Box sx={styles.menuContainer}>
              <Link to='/login'>
                <Linkm
                  variant='h5'
                  underline='hover'
                  sx={{
                    width: '100%',
                    height: '30px',
                    fontSize: { xs: '12px', sm: '16px' },
                    color: theme.palette.mode === 'dark' ? 'white' : 'black',
                  }}
                >
                  {text}
                </Linkm>
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;

const styles = {
  container: {
    width: { xs: '100%', lg: '1200px' },
  },
  name: {
    mr: 2,
    fontWeight: 400,
    fontSize: { xs: '12px', sm: '16px' },
    letterSpacing: '.3rem',
  },
  linksContainer: {
    flexGrow: 1,
    display: { xs: 'none', lg: 'flex' },
    justifyContent: 'flex-end',
  },
  menuContainer: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '10px',
  },
};
