import { Box, Typography, Button } from '@mui/material';

type PageHeaderProps = {
  title: string;
  button: boolean;
  onAction?: (action: string) => void;
  buttonText?: string;
  noPadding?: boolean;
};

const PageHeader = ({
  title,
  button,
  onAction,
  buttonText,
  noPadding,
}: PageHeaderProps) => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      width='100%'
      justifyContent='space-between'
      padding={noPadding ? '20px 0px 0 0px' : '20px 25px 0 20px'}
      alignItems='flex-end'
    >
      <Typography variant='h6' fontWeight='bold' alignSelf='flex-end'>
        {title}
      </Typography>
      {button && (
        <Button
          variant='contained'
          size='small'
          onClick={() => onAction && onAction('add')}
        >
          <Typography variant='body2'>{buttonText}</Typography>
        </Button>
      )}
    </Box>
  );
};

export default PageHeader;
