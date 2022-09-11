import React from "react";
import AppBar from "@mui/material/AppBar";
import { Typography } from "@mui/material";

function TopNav() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: "50px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: "0 25px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        position: "relative",
      }}
    >
      <Typography variant="subtitle1">/ main / labs / akamatsu</Typography>
      <Typography variant="subtitle1">Akamatsu Lab</Typography>
    </AppBar>
  );
}

export default TopNav;
