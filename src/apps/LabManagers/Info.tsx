import { Card, Typography, Box } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";

function LabMain() {
  return (
    <>
      <PageHeader title="Lab Information" button={false} />
      <Box mx="20px" mt="20px">
        <Card style={{ padding: "50px" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
            temporibus incidunt enim vitae rerum itaque facilis qui neque earum,
            a molestiae placeat culpa blanditiis provident vel. Aliquid deserunt
            eos incidunt.
          </Typography>
        </Card>
      </Box>
    </>
  );
}

export default LabMain;
