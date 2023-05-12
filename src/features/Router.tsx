import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../apps/Auth/Login';
import LabMain from '../apps/LabManagers/Info';
import BasePage from '../components/BasePage';
import TeamParent from '../apps/LabManagers/team/TeamParent';
import Signup from '../apps/Auth/Signup';
import Intro from '../apps/marketing/Intro';
import MemberPage from '../apps/LabManagers/team/MemberPage';
import Search from '../apps/Search/Search';
import BasePageNoAuth from '../components/BasePageNoAuth';
import Opportunities from '../apps/LabManagers/opportunities/Opportunities';
import Publications from '../apps/LabManagers/publications/Publications';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/search' element={<Search />} />

      <Route
        path='mylab'
        element={
          <BasePage>
            <LabMain />
          </BasePage>
        }
      />
      <Route
        path='/lab/:id'
        element={
          <BasePageNoAuth>
            <LabMain noAuth />
          </BasePageNoAuth>
        }
      />
      <Route
        path='/lab/Opportunities/:id'
        element={
          <BasePageNoAuth>
            <Opportunities />
          </BasePageNoAuth>
        }
      />
      <Route
        path='/lab/Publications/:id'
        element={
          <BasePageNoAuth>
            <Publications />
          </BasePageNoAuth>
        }
      />
      <Route
        path='/Team'
        element={
          <BasePage>
            <TeamParent />
          </BasePage>
        }
      />
      <Route
        path='/Publications'
        element={
          <BasePage>
            <Publications />
          </BasePage>
        }
      />
      <Route
        path='/Opportunities'
        element={
          <BasePage>
            <Opportunities />
          </BasePage>
        }
      />
      <Route
        path='/lab/Team/:id'
        element={
          <BasePageNoAuth>
            <TeamParent noAuth />
          </BasePageNoAuth>
        }
      />
      <Route
        path='/team/:memberId'
        element={
          <BasePage>
            <MemberPage />
          </BasePage>
        }
      />
      <Route
        path='/lab/member/:id/:memberId'
        element={
          <BasePageNoAuth>
            <MemberPage noAuth />
          </BasePageNoAuth>
        }
      />
      <Route path='/Team/:id' element={<Login />} />
      <Route
        path=''
        element={
          <BasePage>
            <LabMain />
          </BasePage>
        }
      />
    </Routes>
  );
}

export default Router;
