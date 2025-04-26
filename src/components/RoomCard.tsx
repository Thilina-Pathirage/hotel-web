import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import { KingBed, Bathtub, SquareFoot, ArrowForward } from '@mui/icons-material';

interface RoomCardProps {
  title: string;
  price: number;
  discount: number;
  image: string;
  beds: number;
  baths: number;
  size: number;
}

const DiscountChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: '16px',
  left: '16px',
  backgroundColor: '#1a1a1a',
  color: 'white',
  fontWeight: 500,
  borderRadius: '4px',
  height: '28px'
}));

const NextButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  bottom: '16px',
  right: '16px',
  minWidth: '40px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  padding: 0,
  backgroundColor: 'white',
  color: '#1a1a1a',
  '&:hover': {
    backgroundColor: '#f5f5f5',
  }
}));

const RoomCard: React.FC<RoomCardProps> = ({ title, price, discount, image, beds, baths, size }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <Card sx={{ 
      borderRadius: '16px', 
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
      }
    }}>
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height={isMobile ? 180 : 200}
          image={image}
          alt={title}
          sx={{ 
            objectFit: 'cover',
          }}
        />
        <DiscountChip label={`${discount}% OFF`} size="small" />
        <NextButton variant="contained" disableElevation>
          <ArrowForward fontSize="small" />
        </NextButton>
      </Box>
      <CardContent sx={{ p: 2, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h6" sx={{ 
          fontWeight: 600, 
          mb: 1.5,
          fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } 
        }}>
          {title}
        </Typography>
        
        <Stack 
          direction="row" 
          spacing={{ xs: 1, sm: 2 }} 
          sx={{ 
            mb: 2,
            color: '#666'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <KingBed fontSize="small" />
            <Typography variant="body2">{beds}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Bathtub fontSize="small" />
            <Typography variant="body2">{baths}</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <SquareFoot fontSize="small" />
            <Typography variant="body2">{size}</Typography>
          </Box>
        </Stack>
        
        <Box sx={{ mt: 'auto' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 0.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              ${price}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 0.5 }}>
              /day
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RoomCard; 