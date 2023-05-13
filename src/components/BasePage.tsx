import TopNav from './TopNav';
import SideNav from './SideNav';
import Content from './Content';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../tools/hooks';
import { getLab } from '../features/labs/labsSlice';
import { Outlet, useNavigate } from 'react-router-dom';

const BasePage = () => {
  const dispatch = useAppDispatch();
  let navigate = useNavigate();
  const lab = useAppSelector((state) => state.lab.lab);

  useEffect(() => {
    if (lab) return;
    const labLocal = localStorage.getItem('user');
    if (labLocal) {
      const id = JSON.parse(labLocal)._id;
      dispatch(getLab(id));
    } else {
      navigate('/login');
    }
  }, [dispatch, lab, navigate]);

  return (
    <>
      <TopNav />
      <Box display='flex' flexDirection='row' sx={{ height: '100%' }}>
        <SideNav />
        <Content>
          <Outlet />
        </Content>
      </Box>
    </>
  );
};

export default BasePage;
