import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";
import Content from "./Content";
import { Box } from "@mui/material";

function BasePage({ children }: any) {
  return (
    <>
      <TopNav />
      <Box display="flex" flexDirection="row" sx={{ height: "100%" }}>
        <SideNav />
        <Content>{children}</Content>
      </Box>
    </>
  );
}

export default BasePage;
