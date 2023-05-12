import { useEffect } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import Content from './Content';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../tools/hooks';
import { getLab } from '../features/labs/labsSlice';
import NoAuthTopNav from './NoAuthTopNav';
import NoAuthSideNav from './NoAuthSideNav';

const BasePage = ({ children, noAuth }: any) => {
  const dispatch = useAppDispatch();
  const id = useParams<{ id: string }>().id;

  React.useEffect(() => {
    if (id) {
      dispatch(getLab(id));
    }
  }, [dispatch, id]);

  return (
    <>
      <NoAuthTopNav />
      <Box display='flex' flexDirection='row' sx={{ height: '100%' }}>
        <NoAuthSideNav />
        <Content>{children}</Content>
      </Box>
    </>
  );
};

export default BasePage;
