import { Card, Box, Typography } from '@mui/material';
import React from 'react';

const Item = ({ item }: any) => {
  return (
    <Card style={{ padding: '0px 50px', marginTop: '15px' }}>
      <Box
        key={item.title}
        style={{
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h6'
          sx={{
            minWidth: '200px',
            width: '200px',
            maxWidth: '200px',
            fontSize: '14px',
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: 'gray',
            minWidth: '700px',
            width: '700px',
            maxWidth: '700px',
            fontSize: '16px',
            justifySelf: 'flex-start',
            alignSelf: 'flex-start',
            flex: 1,
          }}
        >
          {item.description}
        </Typography>
        <Typography
          variant='subtitle1'
          sx={{ color: 'gray', fontSize: '16px' }}
        >
          {item.date}
        </Typography>
      </Box>
    </Card>
  );
};

export default Item;
