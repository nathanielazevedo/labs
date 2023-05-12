import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ActiveTeamGrid from '../apps/LabManagers/team/ActiveTeamGrid';
import { Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  noAuth?: boolean;
}

const TabPanel = (props: TabPanelProps) => {
  const { value, index } = props;

  return value === index ? <ActiveTeamGrid noAuth={props?.noAuth} /> : null;
};

const BasicTabs = ({ noAuth }: any) => {
  const auth = noAuth;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} mb='15px'>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { height: '0.5px' } }}
          style={{ minHeight: '12px', height: '40px' }}
        >
          <Tab
            label={
              <Typography variant='caption' style={{ fontSize: '10px' }}>
                Active
              </Typography>
            }
          />
          {/* <Tab
            label={
              <Typography variant="caption" style={{ fontSize: "10px" }}>
                Retired
              </Typography>
            }
          /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} noAuth={auth} />
      <TabPanel value={value} index={1} />
    </>
  );
};

export default BasicTabs;
