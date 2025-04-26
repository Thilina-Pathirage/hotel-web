import React from 'react';
import { Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { 
  Computer, // for Private Workspace
  Weekend, // for Outdoor Workspace
  Pool, // for Swimming Pool
  LocalParking, // for Parking Area
  Wifi, // for Free Wifi
  Coffee, // for Breakfast
  ElectricBolt, // for Free Electricity
  LocalLaundryService, // for Laundry Service
  FitnessCenter // for Others (gym icon)
} from '@mui/icons-material';

interface FacilityItemProps {
  icon: React.ReactNode;
  title: string;
}

const FacilityItem: React.FC<FacilityItemProps> = ({ icon, title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
      textAlign: 'center',
      width: '100%',
      maxWidth: 180,
      mx: 'auto',
      mb: { xs: 3, md: 4 }
    }}>
      <Box sx={{
        width: { xs: 70, md: 80 },
        height: { xs: 70, md: 80 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        backgroundColor: '#f5f5f5',
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#e0e0e0',
          transform: 'translateY(-5px)'
        },
        '& svg': {
          fontSize: { xs: 32, md: 40 },
          color: '#1a1a1a',
        }
      }}>
        {icon}
      </Box>
      <Typography variant="h6" sx={{ 
        fontWeight: 500,
        color: '#1a1a1a',
        fontSize: { xs: '1rem', md: '1.125rem' }
      }}>
        {title}
      </Typography>
    </Box>
  );
};

const Facilities = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  const facilities = [
    { icon: <Computer />, title: 'Private Workspace' },
    { icon: <Weekend />, title: 'Outdoor Workspace' },
    { icon: <Pool />, title: 'Swimming Pool' },
    { icon: <LocalParking />, title: 'Parking Area' },
    { icon: <Wifi />, title: 'Free Wifi' },
    { icon: <Coffee />, title: 'Breakfast' },
    { icon: <ElectricBolt />, title: 'Free Electricity' },
    { icon: <LocalLaundryService />, title: 'Laundry Service' },
    { icon: <FitnessCenter />, title: 'Others' },
  ];

  return (
    <Box sx={{ 
      py: { xs: 5, md: 8 }, 
      backgroundColor: '#f8f9fa',
      borderRadius: { xs: 2, md: 4 },
      mx: { xs: 1, sm: 2 }
    }}>
      <Container maxWidth="lg">
        <Typography variant="h2" 
          align="center" 
          sx={{ 
            mb: { xs: 4, md: 8 }, 
            fontWeight: 'bold',
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
            lineHeight: 1.2
          }}
        >
          See the facilites we<br />provide in real time
        </Typography>
        <Box sx={{ 
          maxWidth: 900, 
          mx: 'auto',
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: { xs: 2, sm: 3, md: 4 }
        }}>
          {facilities.map((facility, index) => (
            <FacilityItem key={index} icon={facility.icon} title={facility.title} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Facilities; 