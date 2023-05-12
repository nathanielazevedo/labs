import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: { xs: '100px 20px', lg: '70px 150px' },
        borderRadius: '10px',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: 'black',
          fontWeight: 'bold',
          marginBottom: '30px',
        }}
      >
        Frequently Asked Questions
      </Typography>
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'
          >
            <Typography sx={{ flexShrink: 0 }}>
              How much does it cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>It's totally free!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'
          >
            <Typography sx={{ flexShrink: 0 }}>
              How many people can use it?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>As many as you want!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3bh-content'
            id='panel3bh-header'
          >
            <Typography sx={{ flexShrink: 0 }}>
              Can I converse with other labs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes. This platform is intended to facilitate communication between
              labs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel4bh-content'
            id='panel4bh-header'
          >
            <Typography sx={{ flexShrink: 0 }}>I can't find a lab.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you can't find a lab, it's because they haven't signed up yet.
              Please encourage them to sign up!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}
