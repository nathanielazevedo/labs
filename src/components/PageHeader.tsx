import React from "react";
import { Box, Typography, Button } from "@mui/material";

type PageHeaderProps = {
  title: string;
  button: boolean;
};

const PageHeader = ({ title, button }: PageHeaderProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      width="100%"
      justifyContent="space-between"
      padding="25px 25px 15px 25px"
      alignItems="flex-end"
    >
      <Typography variant="subtitle1" fontWeight="bold" alignSelf="flex-end">
        {title}
      </Typography>
      {button && (
        <Button variant="contained" size="small">
          <Typography variant="body2">Add +</Typography>
        </Button>
      )}
    </Box>
  );
};

export default PageHeader;
