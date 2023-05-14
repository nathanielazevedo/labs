import Content from './Content';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import NoAuthTopNav from './NoAuthTopNav';
import NoAuthSideNav from './SideNavNoAuth';
import { useAppDispatch, useAppSelector } from '../tools/hooks';
import { getOutLab } from '../features/labs/labsSlice';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const BasePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = useParams<{ id: string }>().id;
  const lab = useAppSelector((state) => state.lab.outLab);

  useEffect(() => {
    if (lab) {
      if (lab._id === id) {
        return;
      }
    }
    if (id) {
      dispatch(getOutLab(id));
    } else {
      navigate('/search');
    }
  }, [dispatch, id, lab, navigate]);

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
