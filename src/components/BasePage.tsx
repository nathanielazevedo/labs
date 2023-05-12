import { useEffect } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Content from './Content';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from '../tools/hooks';
import { getLab } from '../features/labs/labsSlice';

const BasePage = ({ children }: any) => {
  const dispatch = useAppDispatch();

  let navigate = useNavigate();
  React.useEffect(() => {
    const labLocal = localStorage.getItem('user');
    if (labLocal) {
      const id = JSON.parse(labLocal)._id;
      console.log(id);
      dispatch(getLab(id));
    }
  }, [dispatch]);

  useEffect(() => {
    const user = localStorage.getItem('user');
    !user && navigate('/login');
  }, [navigate]);

  return (
    <>
      <TopNav />
      <Box display='flex' flexDirection='row' sx={{ height: '100%' }}>
        <SideNav />
        <Content>{children}</Content>
      </Box>
    </>
  );
};

export default BasePage;
