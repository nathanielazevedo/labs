import { Avatar, Box, Card, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import PageHeader from '../../../components/PageHeader';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Item from '../../../components/Item';

function MemberPage({ noAuth }: { noAuth?: boolean }) {
  const memberId = useParams<{ memberId: string }>().memberId;
  const [member, setMember] = React.useState<any>();
  const lab = useSelector((state: any) => {
    return noAuth ? state.lab.outLab : state.lab.myLab;
  });

  useEffect(() => {
    if (!lab) return;
    const labMembers = lab.members;
    const member = labMembers.find((member: any) => member._id === memberId);
    setMember(member);
  }, [lab, memberId]);

  if (!member) return <div>Loading...</div>;

  const myWork = [
    {
      title: 'Publication',
      date: '2021-10-10',
      description: 'I published a paper in the Journal of Science',
    },
    {
      title: 'New Funding',
      date: '2021-10-10',
      description: 'New funding from the National Science Foundation',
    },
  ];

  return (
    <Box>
      {/* <PageHeader
        title='Member'
        button={noAuth ? false : true}
        buttonText='Edit Member'
      /> */}
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
            justifyContent: 'space-between',
            width: '100%',
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
        <Card style={{ padding: '50px 50px', marginTop: '50px' }}>
          <Typography>
            I am a researcher at the University of California, San Diego. I
            received my Ph.D. in Computer Science from the University of
            California, San Diego in 2019. My research interests include
            computer vision, machine learning, and robotics. I am particularly
            interested in developing algorithms that enable robots to perceive
            and interact with the world around them. I am also interested in
            developing algorithms that can learn from experience and adapt to
            new environments.
          </Typography>
        </Card>
        <PageHeader
          title='My Work'
          button={noAuth ? false : true}
          buttonText='Edit'
          noPadding
          // onAction={() => setOpen(true)}
        />
        {myWork.map((news) => (
          <Item item={news} />
        ))}
      </Box>
    </Box>
  );
}

export default MemberPage;
