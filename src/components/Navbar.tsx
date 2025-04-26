import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Container, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const NavButton = styled(Button)(({ theme }) => ({
  color: '#1a1a1a',
  marginLeft: theme.spacing(2),
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const SignInButton = styled(Button)(({ theme }) => ({
  border: '2px solid #1a1a1a',
  borderRadius: '2rem',
  padding: '6px 20px',
  textTransform: 'none',
  fontWeight: 500,
  marginLeft: theme.spacing(3),
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const Logo = styled('img')({
  height: '40px',
  display: 'block',
});

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const navLinks = [
    { id: 'booking', label: 'Booking' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'reviews', label: 'Reviews' }
  ];

  return (
    <AppBar 
      position="sticky" 
      color="transparent" 
      elevation={scrolled ? 2 : 0}
      sx={{
        borderRadius: '0.5rem',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.89)' : 'transparent',
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box 
            sx={{ 
              display: 'flex',
              alignItems: 'center',
              flexGrow: { xs: 1, md: 0 }
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
            <Logo src="/logo.png" alt="H.otel Logo" />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', ml: 4 }}>
              {navLinks.map((link) => (
                <NavButton 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </NavButton>
              ))}
              <SignInButton>Sign In</SignInButton>
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton 
              edge="end" 
              color="inherit" 
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon sx={{ color: '#1a1a1a' }} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
            padding: 2
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
          <Logo src="/logo.png" alt="H.otel Logo" />
        </Box>
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.id} disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(link.id)}
                sx={{ 
                  py: 1.5,
                  borderBottom: '1px solid #eee'
                }}
              >
                <ListItemText 
                  primary={link.label} 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontWeight: 500 
                    } 
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem sx={{ mt: 2, justifyContent: 'center' }} disablePadding>
            <Button 
              variant="outlined" 
              fullWidth
              sx={{ 
                borderRadius: '2rem',
                borderColor: '#1a1a1a',
                color: '#1a1a1a',
                fontWeight: 500,
                py: 1,
                textTransform: 'none'
              }}
            >
              Sign In
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 