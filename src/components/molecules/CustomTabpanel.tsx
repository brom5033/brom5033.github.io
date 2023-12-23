import type { FC, CSSProperties, PropsWithChildren } from 'react';
import { Box } from '@mui/material';

interface TabPanelProps extends PropsWithChildren {
  index: number;
  value: number;
  style?: CSSProperties;
}

export const CustomTabPanel: FC<TabPanelProps> = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};
