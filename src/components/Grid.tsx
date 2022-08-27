import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    sortable: false,
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

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: "100%", width: "100%", padding: "0 20px 20px 20px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[3]}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        getRowHeight={() => 40}
        sx={{
          "& .MuiDataGrid-cell": {
            color: "grey.300",
            fontSize: "12px",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontSize: "13px",
          },
        }}
      />
    </Box>
  );
}
