import AppBar from '@mui/material/AppBar';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

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
      <Typography
        variant='subtitle1'
        sx={{
          minWidth: 'fit-content',
        }}
      >
        / main / labs / {lab?.lab_name && lab.lab_name.toLowerCase()}
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          minWidth: 'fit-content',
        }}
      >
        {lab?.lab_name && lab.lab_name}
      </Typography>
    </AppBar>
  );
}

export default TopNav;
