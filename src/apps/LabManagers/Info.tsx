import { Card, Typography, Box } from '@mui/material';
import React from 'react';
import PageHeader from '../../components/PageHeader';
import { useSelector } from 'react-redux';
import EditLabInfo from './EditLabInfo';

function LabMain({ noAuth }: { noAuth?: boolean }) {
  const lab = useSelector((state: any) => state.lab.lab);
  const [open, setOpen] = React.useState(false);

  if (!lab) return <></>;

  return (
    <>
      <PageHeader
        title={lab.lab_name}
        button={noAuth ? false : true}
        buttonText='Edit'
        onAction={() => setOpen(true)}
      />
      {open && <EditLabInfo close={() => setOpen(false)} />}
      <Box mx='20px' mt='20px'>
        <Card style={{ padding: '50px' }}>
          <Typography>{lab.lab_description}</Typography>
        </Card>
      </Box>
    </>
  );
}

export default LabMain;
