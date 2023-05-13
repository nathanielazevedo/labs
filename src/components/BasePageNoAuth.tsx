import Content from './Content';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import NoAuthTopNav from './NoAuthTopNav';
import NoAuthSideNav from './SideNavNoAuth';
import { useAppDispatch } from '../tools/hooks';
import { getLab } from '../features/labs/labsSlice';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const BasePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = useParams<{ id: string }>().id;

  useEffect(() => {
    if (id) {
      dispatch(getLab(id));
    } else {
      navigate('/search');
    }
  }, [dispatch, id, navigate]);

  return (
    <>
      <NoAuthTopNav />
      <Box display='flex' flexDirection='row' sx={{ height: '100%' }}>
        <NoAuthSideNav />
        <Content>
          <Outlet />
        </Content>
      </Box>
    </>
  );
};

export default BasePage;
