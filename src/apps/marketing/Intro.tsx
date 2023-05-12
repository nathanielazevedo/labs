import { useState } from 'react';
import Faq from './Faq';
import Hero from './Hero';
import Footer from './Footer';
import Navbar from './Navbar';
import AppStore from './AppStore';
import HowItWorks from './HowItWorks';
import SectionFour from './SectionFour';
import RequestDialog from './RequestDialog';
import TrackYourFields from './TrackYourFields';
import { Box } from '@mui/material';

const Intro = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box
      sx={{
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Hero setOpen={setDialogOpen} />
      <AppStore />
      <HowItWorks setOpen={setDialogOpen} />
      <TrackYourFields setOpen={setDialogOpen} />
      <SectionFour setOpen={setDialogOpen} />
      <Faq />
      <Footer />
      <RequestDialog open={dialogOpen} setOpen={setDialogOpen} />
    </Box>
  );
};

export default Intro;
