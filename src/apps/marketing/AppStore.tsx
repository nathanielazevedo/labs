import { Box, Button, Typography } from '@mui/material';
import { globalStyles } from '../../styles';
import { Link } from 'react-router-dom';

const SectionOne = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box sx={{ width: { xs: '90%', md: '50%' } }}>
          <Typography color='black' variant='h4' fontWeight='bold' mb={1}>
            Discover new research
          </Typography>
          <Typography color='black'>
            SRL makes it easier to find research groups and projects that you
            are interested in.
          </Typography>
        </Box>
        <Box sx={styles.imageContainer}>
          <Link
            to='/search'
            style={{
              width: '100%',
            }}
          >
            <Button
              variant='contained'
              fullWidth
              sx={{
                height: '50px',
                color: 'white',
                marginTop: '20px',
                background: globalStyles.gradientBg,
              }}
            >
              Search for a lab
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionOne;

const styles = {
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '70px 0 ',
    borderRadius: '10px',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: { xs: 'column', lg: 'row' },
    alignItems: 'center',
    width: { xs: '90%', lg: '100%' },
    maxWidth: '1200px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: { xs: '90%', md: '40%' },
    paddingTop: { xs: '50px', lg: '0' },
  },
};
