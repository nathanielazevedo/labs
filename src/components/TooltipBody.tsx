import { Box, Typography } from '@mui/material';
import React from 'react';

const TooltipBody = ({ item }: any) => {
  return (
    <Box>
      <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
        {item.title}
      </Typography>
      <Typography variant='subtitle1'>{item.description}</Typography>
      <Typography variant='subtitle1'>{item.date}</Typography>
    </Box>
  );
};

export default TooltipBody;
