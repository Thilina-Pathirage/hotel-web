import React from 'react';
import { Box, Container, Typography, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Logo = styled('img')({
  height: '40px',
  display: 'block',
  marginBottom: '16px'
});

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box component="footer" sx={{ 
      py: { xs: 5, md: 8 }, 
      px: { xs: 2, sm: 3, md: 4 },
      backgroundColor: '#fff' 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)'
          },
          gap: { xs: 4, md: 8 }
        }}>
          {/* Brand Section */}
          <Box>
            <Logo src="/logo.png" alt="H.otel Logo" />
            <Typography variant="body2" sx={{ 
              color: 'text.secondary', 
              mb: 3,
              maxWidth: { xs: '100%', sm: '90%' }
            }}>
              The right property for you. big range of top-rated properties. Price guarantee.
            </Typography>
            <Stack direction="row" spacing={{ xs: 1.5, md: 2 }}>
              <Link href="#" color="inherit" sx={{ 
                backgroundColor: '#f5f5f5', 
                p: { xs: 0.75, md: 1 }, 
                borderRadius: '50%',
                display: 'flex',
                '&:hover': { backgroundColor: '#e0e0e0' }
              }}>
                <Facebook fontSize={isMobile ? "small" : "medium"} />
              </Link>
              <Link href="#" color="inherit" sx={{ 
                backgroundColor: '#f5f5f5', 
                p: { xs: 0.75, md: 1 }, 
                borderRadius: '50%',
                display: 'flex',
                '&:hover': { backgroundColor: '#e0e0e0' }
              }}>
                <Twitter fontSize={isMobile ? "small" : "medium"} />
              </Link>
              <Link href="#" color="inherit" sx={{ 
                backgroundColor: '#f5f5f5', 
                p: { xs: 0.75, md: 1 }, 
                borderRadius: '50%',
                display: 'flex',
                '&:hover': { backgroundColor: '#e0e0e0' }
              }}>
                <Instagram fontSize={isMobile ? "small" : "medium"} />
              </Link>
              <Link href="#" color="inherit" sx={{ 
                backgroundColor: '#f5f5f5', 
                p: { xs: 0.75, md: 1 }, 
                borderRadius: '50%',
                display: 'flex',
                '&:hover': { backgroundColor: '#e0e0e0' }
              }}>
                <YouTube fontSize={isMobile ? "small" : "medium"} />
              </Link>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              Quick Link
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2 }}>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Booking
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Support
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Blog
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Reviews
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Rooms
              </Link>
            </Stack>
          </Box>

          {/* Company */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              Company
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2 }}>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Global Location
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Mission
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Career
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Investor
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Privacy Policy
              </Link>
            </Stack>
          </Box>

          {/* Legal Information */}
          <Box>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: { xs: 2, md: 3 },
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              Legal Information
            </Typography>
            <Stack spacing={{ xs: 1.5, md: 2 }}>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Terms of use
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Privacy Policy
              </Link>
              <Link href="#" color="text.secondary" underline="none" sx={{ '&:hover': { color: 'text.primary' } }}>
                Hotel License Agreement
              </Link>
            </Stack>
          </Box>
        </Box>
        
        <Box sx={{ 
          mt: { xs: 4, md: 6 }, 
          pt: 3, 
          borderTop: '1px solid #eee',
          textAlign: 'center'
        }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} H.otel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 