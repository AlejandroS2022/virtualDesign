import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from "../assets/virtual-design-logo.png";
import { IoIosMore } from "react-icons/io";

const drawerWidth = 240;

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img
        src={Logo}
        className="max-w-[15rem]"
        alt="logo"
      />
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="More Tools" className="text-black!" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Support" className="text-black!" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Community" className="text-black!" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Prices" className="text-black!" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Sign Up" className="bg-[#85cf67]! text-white! py-2! rounded-3xl!" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Login" className="border! border-[#85cf67]! text-black! py-2! rounded-3xl!" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className="bg-slate-50! shadow-none! p-1! border-b-1 border-slate-200">
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            className="text-[#85cf67]!"
          >
            <MenuIcon />
          </IconButton>
          <img
            src={Logo}
            className="max-w-[15rem]"
            alt="logo"
          />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="ml-8!">
            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! sm:inline-flex!">
              More Tools
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! md:inline-flex!">
              Support
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! lg:inline-flex!">
              Community
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! hidden! lg:inline-flex!">
              Prices
            </Button>

            <Button className="text-black! capitalize! ml-1! md:ml-3! lg:ml-5! inline-flex! lg:hidden!">
              <IoIosMore />
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }} className="ml-auto!">
            <Button className="bg-[#85cf67]! text-white! capitalize! mr-3! rounded-3xl!">
              Sign up
            </Button>

            <Button className="border! border-[#85cf67]! text-black! capitalize! rounded-3xl!">
              Log in
            </Button>
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
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
