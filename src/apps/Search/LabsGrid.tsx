import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { getOutLab } from '../../features/labs/labsSlice';
import { useAppDispatch } from '../../tools/hooks';

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
    width: 160,
  },
];

export default function DataTable({ rows }: any) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div style={{ height: 750, width: '900px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        disableColumnMenu
        disableColumnFilter
        getRowId={(row) => row._id}
        loading={rows.length === 0}
        onRowClick={(row) => {
          dispatch(getOutLab(row.row._id));
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
