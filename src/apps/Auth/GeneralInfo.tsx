import { Box, Card, TextField, Typography } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === 'dark' ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

const GeneralInfo = ({ formData, setFormData }: any) => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      width='100vw'
      sx={{
        marginTop: '10vh',
      }}
    >
      <Card
        elevation={5}
        style={{
          width: '500px',
          height: '450px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-evenly'
          alignItems='center'
          width='75%'
          height='95%'
          style={{ borderRadius: '15px' }}
        >
          <Typography
            variant='h4'
            sx={{
              alignSelf: 'flex-start',
            }}
          >
            General Info
          </Typography>
          <TextField
            id='outlined-basic'
            label='Lab Name'
            variant='outlined'
            onChange={(e) =>
              setFormData((o: any) => {
                return { ...o, lab_name: e.target.value };
              })
            }
            fullWidth
          />
          <TextField
            id='outlined-basic'
            label='University Name'
            variant='outlined'
            fullWidth
            onChange={(e) =>
              setFormData((o: any) => {
                return { ...o, university_name: e.target.value };
              })
            }
          />
          <TextField
            id='outlined-basic'
            label='Field of Study'
            variant='outlined'
            fullWidth
            onChange={(e) =>
              setFormData((o: any) => {
                return { ...o, field_of_study: e.target.value };
              })
            }
          />
          <StyledTextarea
            aria-label='minimum height'
            minRows={3}
            placeholder='Lab Description'
            onChange={(e: any) =>
              setFormData({ ...formData, lab_description: e.target.value })
            }
            value={formData.lab_description}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default GeneralInfo;
