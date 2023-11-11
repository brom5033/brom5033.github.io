import { type FC, useState } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Button,
  Toolbar,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { menuList } from '@constants/index';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const style = {
  button: {
    color: '#fff',
    border: '1px solid white',
    marginLeft: '8px',
  },
} as const;

export const DrawerAppBar: FC<Props> = ({ window }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" color="transparent" position="fixed" elevation={0} enableColorOnDark>
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: 'white', mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Minjeong Park
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {menuList.map(({ menuName, src }) => (
              <Button key={menuName} href={src} target="_blank" sx={style.button}>
                {menuName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ my: 2 }}>
              Minjeong Park
            </Typography>
            <Divider />
            <List>
              {menuList.map(({ menuName, src }) => (
                <ListItem key={menuName} disablePadding component="a" href={src} target="_blank">
                  <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                    <ListItemText primary={menuName} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};
