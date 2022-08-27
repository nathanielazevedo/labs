import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "./Grid";

function Content() {
  return (
    <Box display="flex" flexDirection="column" flexGrow="1">
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        justifyContent="space-between"
        padding="25px 25px 15px 25px"
        alignItems="flex-end"
      >
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          alignSelf="flex-end"
          color="grey.300"
        >
          Lab Information
        </Typography>
        <Button variant="outlined" size="small">
          <Typography variant="body2">Add +</Typography>
        </Button>
      </Box>
      <Grid />
    </Box>
  );
}

export default Content;
