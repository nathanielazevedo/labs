import React from "react";
import "./App.css";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import TopNav from "./components/AppBar";
import SideNav from "./components/SideNav";
import Content from "./components/Content";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#081624",
      paper: "#081624",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        display="flex"
        flexDirection="column"
        sx={{ height: "100vh", width: "100vw" }}
      >
        <CssBaseline />
        <TopNav />
        <Box display="flex" flexDirection="row" sx={{ height: "100%" }}>
          <SideNav />
          <Content />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
