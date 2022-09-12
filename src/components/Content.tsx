import React from "react";
import { Box } from "@mui/material";
import LabMembersGrid from "../apps/LabManagers/LabMembersGrid";
import LabMain from "../apps/LabManagers/LabMain";
import { Routes, Route } from "react-router-dom";

const Content = ({ children }: any) => {
  return (
    <Box display="flex" flexDirection="column" flexGrow="1">
      {children}
    </Box>
  );
};

export default Content;
