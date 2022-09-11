import React from "react";
import Grid from "../../components/Grid";
import { GridColDef } from "@mui/x-data-grid";
import PageHeader from "../../components/PageHeader";

const LabMembersGrid = () => {
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 35 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      sortable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      sortable: false,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      sortable: false,
    },
  ];

  return (
    <>
      <PageHeader title="Team" button />
      <Grid rows={rows} columns={columns} />
    </>
  );
};

export default LabMembersGrid;
