import { Avatar, Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MemberPage({ noAuth }: { noAuth?: boolean }) {
  const memberId = useParams<{ memberId: string }>().memberId;
  const [member, setMember] = React.useState<any>();
  const lab = useSelector((state: any) => state.lab?.lab);

  useEffect(() => {
    if (!lab) return;
    const labMembers = lab.members;
    const member = labMembers.find((member: any) => member._id === memberId);
    setMember(member);
  }, [lab, memberId]);

  if (!member) return <div>Loading...</div>;

  return (
    <Box>
      <PageHeader
        title='Member'
        button={noAuth ? false : true}
        buttonText='Edit Member'
      />
      <Box
        sx={{
          padding: '50px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '40px',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
          }}
        >
          <Avatar
            alt={member.name}
            src=''
            sx={{
              width: '100px',
              height: '100px',
            }}
          />
          <Box>
            <Typography variant='h4'>{member.name}</Typography>
            <Typography variant='h5'>{member.position}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MemberPage;
