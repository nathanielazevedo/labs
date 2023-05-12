import React from 'react';
import { Box } from '@mui/material';

const Content = ({ children }: any) => {
  return (
    <Box display='flex' flexDirection='column' flexGrow='1'>
      {children}
    </Box>
  );
};

export default Content;
