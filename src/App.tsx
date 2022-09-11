import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Content from "./components/Content";
import { Routes, Route } from "react-router-dom";
import Login from "./apps/Auth/Login";
import LabMembersGrid from "./apps/LabManagers/LabMembersGrid";
import LabMain from "./apps/LabManagers/LabMain";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212326",
      paper: "#212326",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ height: "100vh", width: "100vw" }}
        >
          <CssBaseline />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="lab"
              element={
                <>
                  <TopNav />
                  <Box
                    display="flex"
                    flexDirection="row"
                    sx={{ height: "100%" }}
                  >
                    <SideNav />
                    <Content />
                  </Box>
                </>
              }
            />
            <Route path="Basics" element={<LabMain />} />
            <Route path="Team" element={<LabMembersGrid />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
