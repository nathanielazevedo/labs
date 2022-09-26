import React from "react";
import Grid from "../../../components/Grid";
import { GridColDef } from "@mui/x-data-grid";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LabMembersGrid = () => {
  const rows = [
    { id: "1", name: "Graham Blitt", position: "Lead Technician" },
    { id: "2", name: "Pierce Blitt", position: "Postdoc" },
  ];

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 150,
      sortable: true,
      renderCell: (data: any) => (
        <RouterLink to={data.id}>
          <Link>{data.value}</Link>
        </RouterLink>
      ),
    },
    {
      field: "position",
      headerName: "Position",
      width: 110,
      sortable: true,
      align: "left",
    },
  ];

  return (
    <Box style={{ height: "100%" }}>
      <Grid rows={rows} columns={columns} />
    </Box>
  );
};

export default LabMembersGrid;
