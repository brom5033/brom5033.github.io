import { Typography, Grid, Tooltip, Button } from '@mui/material';
import { ColorSection } from '@components/atoms';
import { skillList } from '@constants/index';

export const Second = () => {
  return (
    <ColorSection color="#5D5DA8">
      <div>
        <Grid container justifyContent="center" sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={6}>
            <Typography component="h1" variant="h1">
              기술스택
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Grid container gap="8px">
              {skillList.map(({ skillName, src, comment }) => {
                return (
                  <Tooltip key={skillName} title={<h3>{comment}</h3>} placement="top" arrow>
                    <Button sx={{ color: '#fff', border: '1px solid white' }} href={src} target="_blank">
                      {skillName}
                    </Button>
                  </Tooltip>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ColorSection>
  );
};
