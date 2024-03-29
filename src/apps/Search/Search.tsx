import { Box, Typography } from '@mui/material';
import React from 'react';
import NavBar from '../marketing/Navbar';
import Lab from '../../api/Lab';
import LabsGrid from './LabsGrid';

const Search = () => {
  const [labs, setLabs] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchLabs = async () => {
      const labs = await Lab.getLabs();
      setLabs(labs);
    };
    fetchLabs();
  }, []);
  return (
    <Box>
      <NavBar show={false} />
      <Box
        sx={{
          padding: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            variant='h5'
            sx={{ marginBottom: '20px', fontWeight: 'light' }}
          >
            Click a lab to view more information
          </Typography>
          <LabsGrid rows={labs} />
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
