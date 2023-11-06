import React, { useState, type SyntheticEvent } from 'react';
import { ColorSection } from '@components/atoms/ColorSection';
import { Stack, Box, Tabs, Tab, Grid } from '@mui/material';
import { CustomTabPanel } from '@components/molecules/CustomTabpanel';
import { GlassCard } from '@components/atoms/GlassCard';

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
      <Stack>
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
            <Tab label="Item Two" {...a11yProps(1)} sx={{ color: 'white' }} />
            <Tab label="Item Three" {...a11yProps(2)} sx={{ color: 'white' }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack>
                <GlassCard>
                  <h2 style={{ color: '#f7e057' }}>Commit Rule</h2>
                  <p>커밋을 할때는 항상 오류가 없는 상태여야 해요</p>
                  <p>무엇을 개발했는지 명확하게 적어야 해요 </p>
                  <p style={{ color: '#999a9d', fontSize: '12px' }}>#작은단위로 커밋해요 #오류체크 #알아보기 쉽게</p>
                </GlassCard>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <GlassCard>
                <img src="/images/commitrule1.png" alt="" width={320} height={180} />
              </GlassCard>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          중요하게 생각하는 점,
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          관심사 기타
        </CustomTabPanel>
      </Stack>
    </ColorSection>
  );
};
