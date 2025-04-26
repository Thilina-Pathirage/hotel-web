import React from 'react';
import { Box, Typography, Button, Container, Grid as MuiGrid, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import RoomCard from './RoomCard';
import room1 from '../assets/images/room1.jpg';
import room2 from '../assets/images/room2.jpg';
import room3 from '../assets/images/room3.jpg';

const ViewAllButton = styled(Button)(({ theme }) => ({
  borderRadius: '2rem',
  padding: '10px 24px',
  borderColor: '#1a1a1a',
  color: '#1a1a1a',
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    borderColor: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: theme.spacing(1),
}));

const Grid = styled(MuiGrid)({});

const Rooms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'));

  const rooms = [
    {
      title: 'Deluxe Contrast Room',
      price: 85,
      discount: 20,
      image: room1,
      beds: 2,
      baths: 1,
      size: 144
    },
    {
      title: 'Single Contrast Room',
      price: 99,
      discount: 30,
      image: room2,
      beds: 1,
      baths: 1,
      size: 80
    },
    {
      title: 'Deluxe Contrast Room',
      price: 145,
      discount: 40,
      image: room3,
      beds: 3,
      baths: 2,
      size: 212
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 }
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            mb: { xs: 3, md: 4 },
            gap: { xs: 2, sm: 0 }
          }}
        >
          <SectionTitle variant={isMobile ? 'h4' : 'h3'}>
            Rooms we recommend<br />
            for our customers
          </SectionTitle>
          <ViewAllButton variant="outlined">
            View All Rooms
          </ViewAllButton>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 2, sm: 3, md: 4 } }}>
          {rooms.map((room, index) => (
            <Box key={index}>
              <RoomCard {...room} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Rooms; 