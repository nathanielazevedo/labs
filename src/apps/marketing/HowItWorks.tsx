import { Link } from 'react-router-dom';
import { polygons } from '../../assets';
import { constants } from '../../constants';
import { globalStyles } from '../../styles';
import { Box, Button, Card, Typography } from '@mui/material';

const SectionTwo = ({ setOpen }: { setOpen: (val: boolean) => void }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={{ width: { xs: '90%', lg: '1200px' } }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'flex-start', lg: 'space-between' },
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <Box
            sx={{
              width: '550px',
            }}
          >
            <Typography variant='h4' mb={0.5} sx={{ fontWeight: 'bold' }}>
              How it works
            </Typography>
            <Typography>
              Search for labs by field of study, location, and more. Discover
              new research projects and connect with other researchers. Find
              open master / doctoral positions and apply directly through SRL.
            </Typography>
            <Link to='/search'>
              <Button
                variant='contained'
                fullWidth
                onClick={() => setOpen(true)}
                sx={{
                  height: '50px',
                  marginTop: '20px',
                  color: 'white',
                  background: globalStyles.gradientBg,
                }}
              >
                Search for a lab
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <img
              src={polygons}
              alt=''
              style={{
                width: '300px',
                marginRight: '70px',
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: { lg: '320px' },
            gap: '50px',
            marginTop: '100px',
            flexDirection: { xs: 'column', lg: 'row' },
          }}
        >
          {constants.marketingCards.map((card, i) => {
            return (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  width: { xs: '100%', lg: '800px' },
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '-20px',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'green',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1,
                    background: globalStyles.gradientBg,
                  }}
                >
                  <h4>{i + 1}</h4>
                </div>
                <Card
                  sx={{
                    padding: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    minHeight: '290px',
                    maxHeight: '290px',
                    marginTop: '20px',
                  }}
                >
                  <Typography
                    variant='h6'
                    sx={{
                      fontWeight: 'bold',
                      marginBottom: '10px',
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '150px',
                    }}
                  >
                    <img src={card.icon} width='80px' alt='hello' />
                  </Box>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionTwo;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: { xs: '150px 0', lg: '100px' },
  },
};
