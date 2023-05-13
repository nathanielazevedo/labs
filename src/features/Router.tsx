import Login from '../apps/Auth/Login';
import Signup from '../apps/Auth/Signup';
import Intro from '../apps/marketing/Intro';
import Search from '../apps/Search/Search';
import { Routes, Route } from 'react-router-dom';
import BasePageAuth from '../components/BasePage';
import LabMain from '../apps/LabManagers/basic/Info';
import BasePageNoAuth from '../components/BasePageNoAuth';
import TeamParent from '../apps/LabManagers/team/TeamParent';
import MemberPage from '../apps/LabManagers/team/MemberPage';
import Publications from '../apps/LabManagers/publications/Publications';
import Opportunities from '../apps/LabManagers/opportunities/Opportunities';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/search' element={<Search />} />

      {/* No Auth Routes */}
      <Route path='/lab' element={<BasePageNoAuth />}>
        <Route path=':id' element={<LabMain noAuth />} />
        <Route path=':id/team' element={<TeamParent noAuth />} />
        <Route path=':id/team/:memberId' element={<MemberPage noAuth />} />
        <Route path=':id/opportunities' element={<Opportunities />} />
        <Route path=':id/publications' element={<Publications />} />
      </Route>

      {/* Auth Routes */}
      <Route path='/myLab' element={<BasePageAuth />}>
        <Route path='' element={<LabMain />} />
        <Route path='team' element={<TeamParent />} />
        <Route path='team/:memberId' element={<MemberPage />} />
        <Route path='opportunities' element={<Opportunities />} />
        <Route path='publications' element={<Publications />} />
      </Route>
    </Routes>
  );
};

export default Router;
