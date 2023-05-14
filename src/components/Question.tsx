import { Card, Box, Typography, Tooltip } from '@mui/material';
import TooltipBody from './TooltipBody';

const Question = ({ item }: any) => {
  return (
    <Tooltip title={<TooltipBody item={item} />} placement='bottom-start'>
      <Card style={{ padding: '10px 10px', flex: '1 1 10px' }}>
        <Box
          key={item.title}
          style={{
            padding: '20px',
          }}
        >
          <Typography
            variant='subtitle1'
            sx={{
              color: 'gray',
            }}
          >
            {item.description}
          </Typography>
        </Box>
      </Card>
    </Tooltip>
  );
};

export default Question;
