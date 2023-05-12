import { Box, Button, Typography } from '@mui/material';
import { globalStyles } from '../../styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

const SectionFour = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box
          sx={{
            maxWidth: '550px',
            alignSelf: { xs: 'flex-start', lg: 'center' },
          }}
        >
          <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
            Free Website
          </Typography>
          <Typography>
            SRL provides a free website for your lab. You can customize your
            website to your liking and add your own content.
          </Typography>
          <Link to='/signup'>
            <Button
              variant='contained'
              onClick={() => setOpen(true)}
              sx={styles.button}
              color='success'
            >
              Create a lab
            </Button>
          </Link>
        </Box>

        <Box>
          <CheckCircleOutlineIcon sx={{ fontSize: '300px', color: 'white' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default SectionFour;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '150px 0',
  },
  innerContainer: {
    display: 'flex',
    flexDirection: { xs: 'column-reverse', lg: 'row' },
    maxWidth: { xs: '90%', lg: '1200px' },
    width: { xs: '90%', lg: '1200px' },
    gap: { xs: '150px' },
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: '50px',
    fontSize: '1rem',
    color: 'white',
    marginTop: '20px',
    background: globalStyles.gradientBg,
  },
};
