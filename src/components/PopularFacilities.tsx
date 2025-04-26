import React from 'react';
import { Box, Typography, Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const VisitButton = styled(Button)(({ theme }) => ({
  borderRadius: '50px',
  padding: '8px 24px',
  border: '1px solid #1a1a1a',
  color: '#1a1a1a',
  textTransform: 'none',
  marginTop: 20,
  '&:hover': {
    backgroundColor: '#f5f5f5',
  }
}));

const FacilityImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '16px',
}));

const CircleDecoration = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '160px',
  height: '160px',
  borderRadius: '50%',
  border: '10px solid rgba(240, 245, 245, 0.7)',
  zIndex: -1,
}));

const PopularFacilities = () => {
  return (
    <Box sx={{ py: 10, position: 'relative' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ 
          mb: 6, 
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' }
        }}>
          We organize the most popular<br />
          facilities to our customers
        </Typography>

        {/* Restaurant Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4, 
          mb: 8, 
          alignItems: 'center' 
        }}>
          <Box sx={{ position: 'relative' }}>
            <CircleDecoration sx={{ left: '-80px', top: '-40px' }} />
            <FacilityImage 
              src="/restaurant.jpg" 
              alt="Restaurant" 
            />
          </Box>
          <Box>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600, fontSize: '2rem' }}>
                Restaurant
              </Typography>
              <Typography sx={{ color: '#555', mb: 3, lineHeight: 1.6 }}>
                A restaurant or an eatery, is a business that prepares 
                and serves food and drinks to customers. Meals are 
                generally served and eaten on the premises, but 
                many restaurants also offer take-out and food 
                delivery services.
              </Typography>
              <VisitButton variant="outlined">
                Visit Now
              </VisitButton>
            </Box>
          </Box>
        </Box>

        {/* GYM Center Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4, 
          mb: 8, 
          alignItems: 'center',
          direction: { xs: 'column-reverse', md: 'ltr' }
        }}>
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600, fontSize: '2rem' }}>
                GYM Center
              </Typography>
              <Typography sx={{ color: '#555', mb: 3, lineHeight: 1.6 }}>
                Fitness clubs or gyms may be defined as any person, 
                firm, corporation, organization, club, or association 
                engaged in the sale of instruction, training, or assistance 
                in a program of physical exercise or weight reduction.
              </Typography>
              <VisitButton variant="outlined">
                Visit Now
              </VisitButton>
            </Box>
          </Box>
          <Box sx={{ position: 'relative', order: { xs: 1, md: 2 } }}>
            <CircleDecoration sx={{ right: '-80px', bottom: '-40px' }} />
            <FacilityImage 
              src="/gym.jpg" 
              alt="GYM Center"
            />
          </Box>
        </Box>

        {/* Swimming Pool Section */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 4, 
          alignItems: 'center' 
        }}>
          <Box sx={{ position: 'relative' }}>
            <CircleDecoration sx={{ left: '-80px', bottom: '-40px' }} />
            <FacilityImage 
              src="/pool.jpg" 
              alt="Swimming Pool" 
            />
          </Box>
          <Box>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 600, fontSize: '2rem' }}>
                Swimming Pool
              </Typography>
              <Typography sx={{ color: '#555', mb: 3, lineHeight: 1.6 }}>
                Swimming pools are places of relaxation, ease, 
                calmness, and pleasure. These dreams could also indicate 
                repressing emotions and feeling bad because of 
                that. This dream could indicate that you need to get in 
                touch with your feelings.
              </Typography>
              <VisitButton variant="outlined">
                Visit Now
              </VisitButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PopularFacilities; 