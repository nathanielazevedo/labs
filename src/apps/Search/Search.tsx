import { Box } from '@mui/material';
import React from 'react';
import NavBar from '../marketing/Navbar';
import Lab from '../../api/Lab';
import LabsGrid from './LabsGrid';

const Search = () => {
  const [labs, setLabs] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchLabs = async () => {
      const labs = await Lab.getLabs();
      console.log(labs);
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
          <LabsGrid rows={labs} />
        </Box>
      </Box>
    </Box>
  );
};

export default Search;
