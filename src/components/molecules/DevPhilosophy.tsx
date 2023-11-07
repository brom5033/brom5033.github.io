import { Grid, Stack } from '@mui/material';
import { GlassCard } from '@components/atoms';
import { AutoFixHigh, Rule, Build } from '@mui/icons-material';

export const DevPhilosophy = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={7}>
        <Stack gap={4}>
          <Stack>
            <GlassCard>
              <h2 style={{ color: '#f7e057' }}>
                <span style={{ marginRight: '8px' }}>
                  <AutoFixHigh />
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
                  <Rule />
                </span>
                컨벤션
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
                  <Build />
                </span>
                Refactoring
              </h2>
              <p>하나의 함수는 한 역할만 해야해요</p>
              <p>변수명을 정확하게 지어야해요</p>
              <p style={{ color: '#999a9d', fontSize: '14px' }}>#함수분리 #사용하지않는 변수제거 #var 사용하지 않기</p>
            </GlassCard>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Stack gap={4}>
          <Stack>
            <img src="/images/commit-rules.png" alt="" width="100%" height={190} style={{ borderRadius: '5px' }} />
          </Stack>
          <Stack>
            <img
              src="/images/coding-conventions.png"
              alt=""
              width="100%"
              height={195}
              style={{ borderRadius: '5px' }}
            />
          </Stack>
          <Stack>
            <img src="/images/refactoring1.png" alt="" width="100%" height={192} style={{ borderRadius: '5px' }} />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
