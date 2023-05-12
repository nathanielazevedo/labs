import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns: GridColDef[] = [
  {
    field: '_id',
    headerName: '',
    width: 30,
    renderCell: (params) => <></>,
  },
  { field: 'lab_name', headerName: 'Lab Name', width: 150 },
  { field: 'university_name', headerName: 'University', width: 150 },
  {
    field: 'field_of_study',
    headerName: 'Field of Study',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

export default function DataTable({ rows }: any) {
  const navigate = useNavigate();
  return (
    <div style={{ height: 800, width: '900px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        getRowId={(row) => row._id}
        onRowClick={(row) => {
          navigate(`/lab/${row.row._id}`);
        }}
        sx={{
          '& .MuiDataGrid-cell': {
            fontSize: '12px',
            cursor: 'pointer',
          },
          '& .MuiDataGrid-cell:focus': {
            outline: 'none',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            fontSize: '13px',
          },
        }}
      />
    </div>
  );
}
