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
import { Menu as MenuIcon } from '@mui/icons-material';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { menuName: 'github', src: 'https://github.com/brom5033' },
  { menuName: 'notion', src: 'https://gaudy-baryonyx-7e4.notion.site/Link-18bb1ee21c4f4dfc91fbf4575033ff96?pvs=4' },
];

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
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Minjeong Park
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.menuName}
                href={item.src}
                target="_blank"
                sx={{ color: '#fff', border: '1px solid white', marginLeft: '8px' }}
              >
                {item.menuName}
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
              {navItems.map((item) => (
                <ListItem key={item.menuName} disablePadding component="a" href={item.src} target="_blank">
                  <ListItemButton sx={{ textAlign: 'center', color: 'black' }}>
                    <ListItemText primary={item.menuName} />
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
