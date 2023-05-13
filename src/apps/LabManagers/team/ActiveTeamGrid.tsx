import KebabMenu from './KebabMenu';
import { Box, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import Grid from '../../../components/Grid';
import { GridColDef } from '@mui/x-data-grid';
import { Link as RouterLink } from 'react-router-dom';

const LabMembersGrid = ({ noAuth = false }: any) => {
  const lab = useSelector((state: any) => state.lab.lab);
  const rows = lab?.members ?? [];

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '',
      width: 50,
      sortable: true,
      align: 'left',
      renderCell: (data: any) => {
        if (noAuth) return null;
        return <KebabMenu data={data} labId={lab._id} />;
      },
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      sortable: true,
      renderCell: (data: any) => (
        <RouterLink to={noAuth ? `${data.id}` : `${data.id}`}>
          <Link>{data.value}</Link>
        </RouterLink>
      ),
    },
    {
      field: 'position',
      headerName: 'Position',
      width: 300,
      sortable: true,
      align: 'left',
    },
  ];

  return (
    <Box style={{ height: '100%' }}>
      <Grid rows={rows} columns={columns} />
    </Box>
  );
};

export default LabMembersGrid;
