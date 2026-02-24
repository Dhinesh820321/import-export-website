import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Container,
  useScrollTrigger,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// logo image - place your logo file under src/assets and adjust the filename if needed
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Export', path: '/export' },
  { label: 'Import', path: '/import' },
  { label: 'Contact', path: '/contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 4 : 0}
        sx={{
          borderRadius: 0,
          backgroundColor: trigger
            ? 'rgba(13, 59, 19, 0.95)'
            : 'rgba(27, 94, 32, 0.98)',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: trigger
            ? '0 4px 20px rgba(0, 0, 0, 0.15)'
            : 'none',
          borderBottom: trigger
            ? '1px solid rgba(255,255,255,0.08)'
            : '1px solid transparent',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1.5 }}>
            {/* Logo & Brand */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
            >
              {/* replace icon with actual logo image */}
              <Box
                component={RouterLink}
                to="/"
                sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
              >
    <Box
  component="img"
  src={logo}
  alt="Mamma's Spices & Nuts"
  sx={{
    height: { xs: 55, sm: 65, md: 80 },  // responsive size
    width: 'auto',
    mr: 2,
    objectFit: 'contain',
  }}
/>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 800,
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    letterSpacing: '0.01em',
                  }}
                >
                  Mamma's Spices & Nuts
                </Typography>
              </Box>
            </motion.div>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                >
                  <Button
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color: '#fff',
                      px: 2,
                      fontFamily: '"Poppins", sans-serif',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 6,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: location.pathname === item.path ? '60%' : '0%',
                        height: 2,
                        backgroundColor: 'secondary.main',
                        borderRadius: 1,
                        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      },
                      '&:hover::after': {
                        width: '60%',
                      },
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.08)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Mobile menu button */}
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 300,
            background: 'linear-gradient(180deg, #0D3B13 0%, #1B5E20 100%)',
            color: '#fff',
          },
        }}
      >
        <Box sx={{ p: 2.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" fontWeight={700} fontFamily='"Poppins", sans-serif'>
            Menu
          </Typography>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          <AnimatePresence>
            {mobileOpen &&
              navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06, ease: 'easeOut' }}
                >
                  <ListItem disablePadding>
                    <ListItemButton
                      component={RouterLink}
                      to={item.path}
                      onClick={handleDrawerToggle}
                      selected={location.pathname === item.path}
                      sx={{
                        py: 1.8,
                        px: 3,
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(255,255,255,0.12)',
                          borderLeft: '4px solid',
                          borderColor: 'secondary.main',
                        },
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.08)',
                        },
                      }}
                    >
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontWeight: 600,
                          fontFamily: '"Poppins", sans-serif',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </motion.div>
              ))}
          </AnimatePresence>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
