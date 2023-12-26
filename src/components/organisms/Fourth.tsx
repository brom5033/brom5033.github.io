import { useState, type SyntheticEvent, type FC } from 'react';
import { Stack, Box, Tabs, Tab } from '@mui/material';
import { ColorSection } from '@components/atoms';
import { CustomTabPanel, DevPhilosophy, CultureFit, Interests } from '@components/molecules';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const style = {
  minW800: { minHeight: '800px' },
  tabPanel: {
    maxWidth: '873px',
    width: '100%',
  },
} as const;

export const Fourth: FC = () => {
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
          <CustomTabPanel value={value} index={0} style={style.minW800}>
            <DevPhilosophy />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} style={Object.assign({}, style.minW800, style.tabPanel)}>
            <CultureFit />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2} style={Object.assign({}, style.minW800, style.tabPanel)}>
            <Interests />
          </CustomTabPanel>
        </Stack>
      </div>
    </ColorSection>
  );
};
