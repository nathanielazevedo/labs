import React from 'react';
import Grid from '../../../components/Grid';
import { GridColDef } from '@mui/x-data-grid';
import { Box, Link } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import KebabMenu from './KebabMenu';

const LabMembersGrid = ({ noAuth = false }: any) => {
  const lab = useSelector((state: any) => state.lab.lab);
  const rows = lab?.members;
  const id = useParams<{ id: string }>().id;

  if (!rows) return <div>loading...</div>;

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
        <RouterLink
          to={noAuth ? `/lab/member/${id}/${data.id}` : `/team/${data.id}`}
        >
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
