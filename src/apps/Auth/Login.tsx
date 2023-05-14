import { Box, TextField, Typography, Button, Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Authentication from '../../api/Auth';
import NavBar from '../marketing/Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const [error, setError] = useState(false);

  const handleLogin = async () => {
    if (!formData.email || !formData.password) return setError(true);
    try {
      const user = await Authentication.login(formData);
      if (user) {
        navigate('/mylab', { replace: true });
      }
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    user && navigate('/mylab', { replace: true });
  }, [navigate]);

  return (
    <>
      <NavBar show={false} />
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        height='100vh'
        width='100vw'
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
            // border="solid grey 1px"
            width='75%'
            height='75%'
            style={{ borderRadius: '15px' }}
          >
            <Typography
              variant='h4'
              justifySelf='flex-start'
              fontWeight='bold'
              width='100%'
              // textAlign="center"
            >
              Login
            </Typography>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              onChange={(e) =>
                setFormData((o) => {
                  return { ...o, email: e.target.value };
                })
              }
              fullWidth
            />
            <TextField
              id='outlined-basic'
              label='Password'
              type='password'
              variant='outlined'
              fullWidth
              onChange={(e) =>
                setFormData((o) => {
                  return { ...o, password: e.target.value };
                })
              }
            />
            {error && (
              <Typography
                variant='body1'
                color='error'
                sx={{
                  alignSelf: 'flex-start',
                }}
              >
                Invalid credentials
              </Typography>
            )}
            <Button variant='contained' fullWidth onClick={handleLogin}>
              Login
            </Button>
            <Link to='/signup' style={{ width: '100%' }}>
              <Button variant='outlined' fullWidth>
                Signup
              </Button>
            </Link>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Login;
