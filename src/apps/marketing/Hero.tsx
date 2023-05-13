import { Box, Button, Typography } from '@mui/material';
import { hero } from '../../assets';
import { Link } from 'react-router-dom';

const Hero = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        maxWidth: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'flex-start', lg: 'flex-start' },
          alignItems: 'center',
          maxWidth: { xs: '80%', sm: '90%', lg: '1200px' },
          width: { xs: '80%', sm: '100%', lg: '1200px' },
        }}
      >
        <Box sx={{ width: '500px', zIndex: 1 }}>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mb={0.5}>
            A Place For Labs
          </Typography>
          <Typography mb={3}>
            SRL is an attempt to organize and facilitate the process of
            scientific research. As a researcher, you get a free and constantly
            updated profile, a place to share your work, and a way to connect
            with other researchers. As a student or enthusiast, you can find
            research groups to join, and learn about the latest research.
          </Typography>
          <Link to='/search'>
            <Button
              variant='contained'
              sx={{
                width: '100%',
                height: '50px',
                fontSize: '1rem',
                color: 'white',
                background:
                  'radial-gradient(926px at 2.7% 11%, #30a7d0 0%, rgb(178, 31, 102) 90%)',
              }}
              onClick={() => setOpen(true)}
            >
              Search for a lab
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', lg: 'flex' },
          }}
        >
          <img
            src={hero}
            alt=''
            style={{
              width: '600px',
              borderRadius: '50%',
              marginBottom: '200px',
              paddingLeft: '100px',
              paddingTop: '100px',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
