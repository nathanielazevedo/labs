import { Box, Card, TextField, Typography } from '@mui/material';

const GeneralInfo = ({ formData, setFormData, error, setError }: any) => {
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
          justifyContent='center'
          alignItems='center'
          gap={5}
          width='75%'
          height='75%'
          style={{ borderRadius: '15px' }}
        >
          <Typography
            variant='h4'
            sx={{
              alignSelf: 'flex-start',
            }}
          >
            Authentication
          </Typography>
          <TextField
            id='outlined-basic'
            label='Email'
            variant='outlined'
            type='email'
            error={error.email !== ''}
            helperText={error ? error.email : ''}
            onChange={(e) => {
              setError((o: any) => ({ ...o, email: '' }));
              setFormData((o: any) => {
                return { ...o, email: e.target.value };
              });
            }}
            fullWidth
          />
          <TextField
            id='outlined-basic'
            label='Password'
            type='password'
            error={error.password !== ''}
            variant='outlined'
            helperText={error !== '' ? error.password : ''}
            fullWidth
            onChange={(e) => {
              setError((o: any) => ({ ...o, password: '' }));
              setFormData((o: any) => {
                return { ...o, password: e.target.value };
              });
            }}
          />
        </Box>
      </Card>
    </Box>
  );
};

export default GeneralInfo;
