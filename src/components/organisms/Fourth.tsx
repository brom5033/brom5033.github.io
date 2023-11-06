import { useState, type SyntheticEvent } from 'react';
import { Stack, Box, Tabs, Tab, Grid } from '@mui/material';
import { ColorSection } from '@components/atoms/ColorSection';
import { CustomTabPanel } from '@components/molecules/CustomTabpanel';
import { GlassCard } from '@components/atoms/GlassCard';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import RuleIcon from '@mui/icons-material/Rule';
import BuildIcon from '@mui/icons-material/Build';

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
              <Stack gap={4}>
                <Stack>
                  <GlassCard>
                    <h2 style={{ color: '#f7e057' }}>
                      <span style={{ marginRight: '8px' }}>
                        <AutoFixHighIcon />
                      </span>
                      Commit Rule
                    </h2>
                    <p>커밋을 할 때는 항상 오류가 없는 상태여야 해요</p>
                    <p>깔끔하고 일관된 메세지로 작성해야해요</p>
                    <p style={{ color: '#999a9d', fontSize: '14px' }}>#작은단위로 커밋 #오류체크 #알아보기 쉽게</p>
                  </GlassCard>
                </Stack>
                <Stack>
                  <GlassCard>
                    <h2 style={{ color: '#f7e057' }}>
                      <span style={{ marginRight: '8px' }}>
                        <RuleIcon />
                      </span>
                      Coding Conventions
                    </h2>
                    <p>코드는 항상 명사로 작성해야해요</p>
                    <p>같은 관심사끼리 묶어야해요 </p>
                    <p style={{ color: '#999a9d', fontSize: '14px' }}>#Naming Rules #유지보수 #규칙준수</p>
                  </GlassCard>
                </Stack>
                <Stack>
                  <GlassCard>
                    <h2 style={{ color: '#f7e057' }}>
                      <span style={{ marginRight: '8px' }}>
                        <BuildIcon />
                      </span>
                      Refactoring
                    </h2>
                    <p>하나의 함수는 한 역할만 해야해요</p>
                    <p>변수명을 정확하게 지어야해요</p>
                    <p style={{ color: '#999a9d', fontSize: '14px' }}>
                      #함수분리 #사용하지않는 변수제거 #var 사용하지 않기
                    </p>
                  </GlassCard>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack gap={4}>
                <Stack>
                  <GlassCard>
                    <img src="/images/commitrule1.png" alt="" width="100%" height={180} />
                  </GlassCard>
                </Stack>
                <Stack>
                  <GlassCard>
                    <img src="/images/codeConvention.png" alt="" width="100%" height={190} />
                  </GlassCard>
                </Stack>
                <Stack>
                  <GlassCard>
                    <img src="/images/refactoring.png" alt="" width="100%" height={180} />
                  </GlassCard>
                </Stack>
              </Stack>
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
