import { ColorSection } from '@components/atoms/ColorSection';
import { Grid, Stack } from '@mui/material';

export const Third = () => {
  return (
    <ColorSection color="#f7e057">
      <Grid container sx={{ height: '100%' }}>
        <Grid item xs={12} md={6} sx={{ height: '100%' }}>
          <Stack sx={{ alignItems: 'center', height: '100%', justifyContent: 'center' }}>
            <Stack
              sx={{
                height: '400px',
                width: '300px',
                borderRadius: '18px',
                border: '3px solid rgba(0,0,0,0.2)',
              }}
            >
              <img
                src="/images/zoodiary.jpg"
                alt="zoodiary"
                width={294}
                height={394}
                style={{ borderRadius: '15px' }}
              />
            </Stack>
            <Stack
              sx={{
                height: '400px',
                width: '300px',
                marginTop: '30px',
                borderRadius: '18px',
                border: '3px solid rgba(0,0,0,0.2)',
              }}
            >
              <img src="/images/rozet.jpg" alt="rozet" width={294} height={394} style={{ borderRadius: '15px' }} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ backgroundColor: '#999a9d', height: '100%' }}>
          dddd
        </Grid>
      </Grid>
    </ColorSection>
  );
};
