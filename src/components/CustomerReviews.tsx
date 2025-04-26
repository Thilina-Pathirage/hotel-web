import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Paper, Rating, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

interface Review {
  id: number;
  name: string;
  profession: string;
  rating: number;
  comment: string;
  image: string;
}

const CustomerReviews = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Floyd Miles',
      profession: 'IT Professional',
      rating: 5,
      comment: 'The bed was extremely comfortable. Everything was great at this appartement. Amazing staff that is friendly and makes customers feel welcome. I\'ll be back in a month! I will definitely stay there when I come back!',
      image: '/customer1.png'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      profession: 'Marketing Executive',
      rating: 5,
      comment: 'Wonderful experience! The room was spacious, clean and had a breathtaking view. The staff went above and beyond to make our stay memorable. The dining options were excellent too.',
      image: '/customer2.png'
    },
    {
      id: 3,
      name: 'Alex Chen',
      profession: 'Software Engineer',
      rating: 4,
      comment: 'Great location with easy access to all the city attractions. The hotel facilities were top-notch, especially the gym and swimming pool. Would highly recommend for both business and leisure trips.',
      image: '/customer3.png'
    }
  ];

  const [currentReview, setCurrentReview] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle swipe gestures for mobile
  useEffect(() => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      handlePrevious();
    }
  }, [touchEnd]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ 
      py: { xs: 5, sm: 7, md: 10 }, 
      px: { xs: 2, sm: 3, md: 4 },
      position: 'relative', 
      backgroundColor: '#fff' 
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ 
          mb: { xs: 4, md: 6 }, 
          fontWeight: 700,
          fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
          lineHeight: 1.3
        }}>
          What our customers are<br />
          saying about us
        </Typography>

        <Box sx={{ 
          position: 'relative', 
          my: { xs: 2, md: 4 }, 
          mx: 'auto', 
          maxWidth: 900,
          px: { xs: isMobile ? 1 : 4, md: 0 }
        }}>
          {!isMobile && (
            <IconButton 
              onClick={handlePrevious}
              sx={{ 
                backgroundColor: 'white',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                left: { xs: 0, md: -20 }
              }}
            >
              <NavigateBefore />
            </IconButton>
          )}

          <Box 
            sx={{ 
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              borderRadius: '16px',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <Paper sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              p: { xs: 3, md: 4 },
              gap: { xs: 3, md: 4 },
              borderRadius: { xs: '12px', md: '16px' },
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              backgroundColor: '#f9f9f9',
              maxWidth: 900,
              margin: '0 auto'
            }}>
              <Box sx={{ 
                width: { xs: '140px', sm: '160px', md: '200px' }, 
                height: { xs: '140px', sm: '160px', md: '200px' }, 
                borderRadius: { xs: '10px', md: '12px' },
                overflow: 'hidden',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                mx: { xs: 'auto', md: 0 }
              }}>
                <img 
                  src={reviews[currentReview].image} 
                  alt={reviews[currentReview].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              
              <Box sx={{ 
                textAlign: { xs: 'center', md: 'left' },
                width: '100%'
              }}>
                <Typography variant="h4" sx={{ 
                  mb: 1, 
                  fontWeight: 600,
                  fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' }
                }}>
                  {reviews[currentReview].name}
                </Typography>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    mb: 2, 
                    color: 'text.secondary',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  {reviews[currentReview].profession}
                </Typography>
                
                <Rating 
                  value={reviews[currentReview].rating} 
                  readOnly 
                  size={isMobile ? "small" : "medium"}
                  sx={{ mb: 2, color: '#FFB800' }}
                />
                
                <Typography sx={{ 
                  fontStyle: 'italic', 
                  lineHeight: 1.6,
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  maxHeight: { xs: '120px', md: 'none' },
                  overflow: { xs: 'auto', md: 'visible' }
                }}>
                  "{reviews[currentReview].comment}"
                </Typography>
              </Box>
            </Paper>
          </Box>

          {!isMobile && (
            <IconButton 
              onClick={handleNext}
              sx={{ 
                backgroundColor: 'white',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 2,
                right: { xs: 0, md: -20 }
              }}
            >
              <NavigateNext />
            </IconButton>
          )}

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            mt: { xs: 2, md: 3 },
            gap: { xs: 2, md: 1 }
          }}>
            {isMobile && (
              <IconButton 
                onClick={handlePrevious}
                size="small"
                sx={{ color: '#1a1a1a' }}
              >
                <NavigateBefore />
              </IconButton>
            )}
            
            {reviews.map((_, index) => (
              <Box 
                key={index}
                onClick={() => setCurrentReview(index)}
                sx={{
                  width: { xs: 8, md: 10 },
                  height: { xs: 8, md: 10 },
                  borderRadius: '50%',
                  backgroundColor: index === currentReview ? 'primary.main' : '#e0e0e0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            ))}
            
            {isMobile && (
              <IconButton 
                onClick={handleNext}
                size="small"
                sx={{ color: '#1a1a1a' }}
              >
                <NavigateNext />
              </IconButton>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerReviews; 