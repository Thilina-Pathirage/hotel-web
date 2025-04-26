import React from 'react';
import {
  Box,
  Popover,
  Typography,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface GuestSelectorProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  adults: number;
  children: number;
  rooms: number;
  onAdultsChange: (value: number) => void;
  onChildrenChange: (value: number) => void;
  onRoomsChange: (value: number) => void;
}

const CounterControl = ({ 
  label, 
  value, 
  onChange, 
  min = 1, 
  max = 10 
}: { 
  label: string; 
  value: number; 
  onChange: (value: number) => void; 
  min?: number; 
  max?: number; 
}) => (
  <Box sx={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    width: '100%',
    mb: 2 
  }}>
    <Typography>{label}</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <IconButton 
        size="small" 
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        sx={{ 
          border: '1px solid #e0e0e0',
          '&:hover': {
            background: '#f5f5f5'
          }
        }}
      >
        <Remove fontSize="small" />
      </IconButton>
      <Typography sx={{ minWidth: '30px', textAlign: 'center' }}>
        {value}
      </Typography>
      <IconButton 
        size="small" 
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        sx={{ 
          border: '1px solid #e0e0e0',
          '&:hover': {
            background: '#f5f5f5'
          }
        }}
      >
        <Add fontSize="small" />
      </IconButton>
    </Box>
  </Box>
);

const GuestSelector: React.FC<GuestSelectorProps> = ({
  anchorEl,
  onClose,
  adults,
  children,
  rooms,
  onAdultsChange,
  onChildrenChange,
  onRoomsChange,
}) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: -8,
        horizontal: 'left',
      }}
      PaperProps={{
        sx: {
          mt: 1,
          p: 3,
          width: 300,
          borderRadius: 2,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
        }
      }}
    >
      <Stack spacing={2}>
        <CounterControl
          label="Adults"
          value={adults}
          onChange={onAdultsChange}
          min={1}
        />
        <CounterControl
          label="Children"
          value={children}
          onChange={onChildrenChange}
          min={0}
        />
        <CounterControl
          label="Rooms"
          value={rooms}
          onChange={onRoomsChange}
          min={1}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={onClose}
          sx={{
            mt: 2,
            bgcolor: '#1a1a1a',
            borderRadius: '30px',
            '&:hover': {
              bgcolor: '#333'
            }
          }}
        >
          Apply
        </Button>
      </Stack>
    </Popover>
  );
};

export default GuestSelector; 