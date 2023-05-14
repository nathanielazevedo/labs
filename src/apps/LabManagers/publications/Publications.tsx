import { Box } from '@mui/material';
import PageHeader from '../../../components/PageHeader';
import Item from '../../../components/Item';

const Opportunities = ({ noAuth }: any) => {
  const recentNews = [
    {
      title: 'All you need is Attention',
      date: '2021-10-10',
      description: 'A study on artifical neural networks and attention',
    },
    {
      title: 'Chemistry and the Brain',
      date: '2021-10-10',
      description: 'A study on the effects of chemistry on the brain',
    },
    {
      title: 'Biology of the Brain',
      date: '2021-10-10',
      description: 'A study on the effects of biology on the brain',
    },
  ];
  return (
    <>
      <PageHeader
        title='Publications'
        button={false}
        buttonText='Edit'
        // onAction={() => setOpen(true)}
      />
      <Box mx='20px' mt='20px'>
        {recentNews.map((news, index) => (
          <Item item={news} key={index} />
        ))}
      </Box>
    </>
  );
};

export default Opportunities;
