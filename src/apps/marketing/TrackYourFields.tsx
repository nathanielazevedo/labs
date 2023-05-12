import { Box, Button, Typography } from '@mui/material';
import { globalStyles } from '../../styles';
import { Link } from 'react-router-dom';
import CloudDoneIcon from '@mui/icons-material/CloudDone';

const SectionThree = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.innerContainer}>
        <Box>
          <CloudDoneIcon
            sx={{
              fontSize: '300px',
            }}
          />
        </Box>
        <Box sx={styles.wordContainer}>
          <Typography
            variant='h4'
            sx={{ fontWeight: 'bold', marginBottom: '5px' }}
          >
            Research Organized
          </Typography>
          <Typography>
            The webspace for scientific research labs is fragmented. SRL
            provides a single platform for researchers to organize their
            research, connect with other researchers, and find new research
            opportunities.
          </Typography>
          <Link to='/search'>
            <Button
              fullWidth
              sx={styles.button}
              variant='contained'
              onClick={() => setOpen(true)}
            >
              Search for a lab
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SectionThree;

const styles = {
  container: {
    height: { xs: '800px', lg: '50vh' },
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: '10px',
    padding: { xs: '100px 0', lg: '0' },
  },
  innerContainer: {
    color: 'black',
    display: 'flex',
    flexDirection: { xs: 'column-reverse', lg: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    width: { xs: '90%', lg: '1200px' },
    maxWidth: { xs: '90%', lg: '900px' },
    gap: { xs: '0px', lg: '70px' },
  },
  wordContainer: {
    maxWidth: { xs: '550px', lg: '500px' },
    alignSelf: { xs: 'flex-start', lg: 'center' },
  },
  button: {
    marginTop: '30px',
    color: 'white',
    height: '50px',
    background: globalStyles.gradientBg,
  },
};
