import { useState, type SyntheticEvent } from 'react';
import { Stack, Box, Tabs, Tab } from '@mui/material';
import { ColorSection } from '@components/atoms/ColorSection';
import { CustomTabPanel } from '@components/molecules/CustomTabpanel';
import { DevPhilosophy } from '@components/molecules/DevPhilosophy';
import { CultureFit } from '@components/molecules/CultureFit';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

export const Fourth = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <ColorSection color="#0f4c82">
      <div>
        <Stack sx={{ alignItems: 'center' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: '#f7e057',
                },
              }}
              sx={{
                '.Mui-selected': {
                  color: `#f7e057 !important`,
                },
              }}
            >
              <Tab label="개발철학" {...a11yProps(0)} sx={{ color: 'white' }} />
              <Tab label="Culture Fit" {...a11yProps(1)} sx={{ color: 'white' }} />
              <Tab label="관심사/기타" {...a11yProps(2)} sx={{ color: 'white' }} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0} style={{ minHeight: '800px' }}>
            <DevPhilosophy />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} style={{ minHeight: '800px', maxWidth: '873px', width: '100%' }}>
            <CultureFit />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} style={{ minHeight: '800px' }}>
            관심사 기타
          </CustomTabPanel>
        </Stack>
      </div>
    </ColorSection>
  );
};
