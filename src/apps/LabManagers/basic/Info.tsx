import { Card, Typography, Box } from '@mui/material';
import React from 'react';
import PageHeader from '../../../components/PageHeader';
import { useSelector } from 'react-redux';
import EditLabInfo from './EditLabInfo';
import { polygons } from '../../../assets';
import Item from '../../../components/Item';
import Question from '../../../components/Question';

function LabMain({ noAuth }: { noAuth?: boolean }) {
  const lab = useSelector((state: any) => {
    return noAuth ? state.lab.outLab : state.lab.myLab;
  });
  const [open, setOpen] = React.useState(false);

  if (!lab) return <></>;

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
  const questions = [
    {
      description:
        'Why is light so fast? We seek to answer this question and more in our lab and describe the speed of light in a vacuum as a constant that is independent of the motion of the emitting body.',
    },
    {
      description:
        'How do we measure the speed of light? We seek to answer this question and more in our lab and describe the speed of light in a vacuum as a constant that is independent of the motion of the emitting body.',
    },
    {
      description:
        'How do we measure the speed of light? We seek to answer this question and more in our lab and describe the speed of light in a vacuum as a constant that is independent of the motion of the emitting body.',
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
      <Box
        mx='20px'
        mt='20px'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Box>
          <Card style={{ padding: '40px 50px' }} elevation={1}>
            <Typography variant='subtitle1'>{lab.lab_description}</Typography>
          </Card>
          <Box>
            <PageHeader
              title='Questions We Ask'
              button={noAuth ? false : true}
              buttonText='Edit'
              onAction={() => setOpen(true)}
              noPadding
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0px 0px',
                width: '100%',
                gap: '20px',
                marginTop: '15px',
              }}
            >
              {questions.map((news) => (
                <Question item={news} />
              ))}
            </Box>
          </Box>
          <Box>
            <PageHeader
              title='Recent News'
              button={noAuth ? false : true}
              buttonText='Edit'
              onAction={() => setOpen(true)}
              noPadding
            />
            {recentNews.map((news) => (
              <Item item={news} />
            ))}
          </Box>
        </Box>
        <Card
          style={{
            padding: '20px 50px',
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifySelf: 'flex-end',
            marginBottom: '20px',
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
