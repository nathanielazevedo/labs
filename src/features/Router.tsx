import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../apps/Auth/Login";
import LabMain from "../apps/LabManagers/Info";
import BasePage from "../components/BasePage";
import TeamParent from "../apps/LabManagers/team/TeamParent";

function Router() {
  let navigate = useNavigate();
  const user = localStorage.getItem("token");
  !user && navigate("/login");
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="Basics"
        element={
          <BasePage>
            <LabMain />
          </BasePage>
        }
      />
      <Route
        path="/Team"
        element={
          <BasePage>
            <TeamParent />
          </BasePage>
        }
      />
      <Route path="/Team/:id" element={<Login />} />
      <Route
        path=""
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
