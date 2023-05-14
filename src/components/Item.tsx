import { Card, Box, Typography, Tooltip } from '@mui/material';
import TooltipBody from './TooltipBody';

const Item = ({ item }: any) => {
  return (
    <Tooltip title={<TooltipBody item={item} />} placement='bottom-start'>
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
            variant='subtitle1'
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
            variant='subtitle1'
            sx={{
              color: 'gray',
              minWidth: '700px',
              width: '700px',
              maxWidth: '700px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',

              flex: 1,
            }}
          >
            {item.description}
          </Typography>
          <Typography variant='subtitle1' sx={{ color: 'gray' }}>
            {item.date}
          </Typography>
        </Box>
      </Card>
    </Tooltip>
  );
};

export default Item;
