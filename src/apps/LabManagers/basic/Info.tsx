import { Card, Typography, Box } from '@mui/material';
import React from 'react';
import PageHeader from '../../../components/PageHeader';
import { useSelector } from 'react-redux';
import EditLabInfo from './EditLabInfo';
import { polygons } from '../../../assets';

function LabMain({ noAuth }: { noAuth?: boolean }) {
  const lab = useSelector((state: any) => state.lab.lab);
  const [open, setOpen] = React.useState(false);

  if (!lab) return <></>;
  console.log('loaded');
  const recentNews = [
    {
      title: 'New Lab Manager',
      date: '2021-10-10',
      description: 'Dr. John Doe is now the new lab manager',
    },
    {
      title: 'New Publication',
      date: '2021-10-10',
      description: 'New paper published in the Journal of Science',
    },
    {
      title: 'New Funding',
      date: '2021-10-10',
      description: 'New funding from the National Science Foundation',
    },
  ];

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
        <Card style={{ padding: '50px 50px' }}>
          <Typography>{lab.lab_description}</Typography>
        </Card>
        <Card style={{ padding: '50px', marginTop: '30px' }}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: 'bold',
            }}
          >
            Recent News
          </Typography>

          {recentNews.map((news) => (
            <Box
              key={news.title}
              style={{
                borderBottom: '1px solid #ccc',

                padding: '10px',
                marginTop: '15px',
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  fontSize: '19px',
                }}
              >
                {news.title}
              </Typography>
              <Typography
                variant='subtitle1'
                sx={{ color: 'gray', fontSize: '16px' }}
              >
                {news.date}
              </Typography>
              <Typography
                variant='body1'
                sx={{ color: 'gray', fontSize: '16px' }}
              >
                {news.description}
              </Typography>
            </Box>
          ))}
        </Card>
        <Card
          style={{
            padding: '20px 50px',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography>{lab.university_name}</Typography>
            <Typography>{lab.email}</Typography>
            <Typography>{lab.field_of_study}</Typography>
          </Box>
          <Box>
            <img src={polygons} alt='' style={{ width: '100px' }} />
          </Box>
        </Card>
      </Box>
    </>
  );
}

export default LabMain;
