import { Card, Typography, Box } from '@mui/material';
import React from 'react';
import PageHeader from '../../../components/PageHeader';

const Opportunities = ({ noAuth }: any) => {
  const recentNews = [
    {
      title: 'Lab Manager',
      date: '2021-10-10',
      description:
        'The laboratory manager must be able to work precisely and structurally. While they usually work with several people in the lab, they must be able to work independently as well. ',
    },
    {
      title: 'Postdoc',
      date: '2021-10-10',
      description:
        'Postdoctoral research fellow provides scientific expertise and leadership in areas that include biology, food chemistry,physiology, and metabolism, with demonstrated ability to integrate and interpret complex scientific data and systems biology.',
    },
    {
      title: 'Undergraduate Researcher',
      date: '2021-10-10',
      description:
        'We are looking for a new undergraduate researcher. Come have fun in our lab!',
    },
    {
      title: 'Lecturer',
      date: '2021-10-10',
      description:
        'The lecturer will be responsible for teaching undergraduate and graduate courses in the area of food science and technology, and food chemistry.',
    },
  ];
  return (
    <>
      <PageHeader
        title='Opportunities'
        button={false}
        buttonText='Edit'
        // onAction={() => setOpen(true)}
      />
      <Box mx='20px' mt='20px'>
        <Card style={{ padding: '50px' }}>
          {recentNews.map((news, index) => (
            <Box
              key={news.title}
              style={{
                borderBottom: '1px solid #ccc',

                padding: '10px',
                marginTop: index === 0 ? '0px' : '15px',
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
      </Box>
    </>
  );
};

export default Opportunities;