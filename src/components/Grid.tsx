import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type GridProps = {
  rows: any;
  columns: GridColDef[];
};

export default function Grid({ rows, columns }: GridProps) {
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
