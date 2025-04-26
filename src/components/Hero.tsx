import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Popover, useMediaQuery, useTheme } from '@mui/material';
import { CalendarMonth, Person, Search } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import GuestSelector from './GuestSelector';

const SearchBar = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '-30px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '900px',
  zIndex: 10,
  padding: '0 24px',
  [theme.breakpoints.down('md')]: {
    bottom: '-90px',
    padding: '0 16px',
  },
  [theme.breakpoints.down('sm')]: {
    bottom: '-140px',
    padding: '0 12px',
  }
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  background: 'white',
  borderRadius: '40px',
  padding: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  flexWrap: 'nowrap',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  '.divider': {
    width: '1px',
    height: '40px',
    background: '#e0e0e0',
    margin: '0 4px',
    flexShrink: 0,
  },
  [theme.breakpoints.down('md')]: {
    gap: '2px',
    '.divider': {
      margin: '0 2px',
    },
    flexWrap: 'wrap',
    borderRadius: '20px',
    padding: '8px',
  }
}));

const SearchItem = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  color: '#666',
  textTransform: 'none',
  justifyContent: 'flex-start',
  borderRadius: '34px',
  flex: '1 1 auto',
  minWidth: '200px',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#f5f5f5',
  },
  '& .MuiButton-startIcon': {
    marginRight: '12px',
  },
  '& .MuiButton-startIcon svg': {
    fontSize: 20,
  },
  [theme.breakpoints.down('md')]: {
    flex: '1 1 100%',
    marginBottom: '4px',
    padding: '10px 16px',
  }
}));

const SearchButton = styled(Button)(({ theme }) => ({
  background: '#1a1a1a',
  borderRadius: '0px 30px 30px 0px',
  padding: '25px 40px',
  color: 'white',
  textTransform: 'none',
  minWidth: '140px',
  flex: '0 0 auto',
  '&:hover': {
    background: '#333',
  },
  [theme.breakpoints.down('md')]: {
    padding: '15px 30px',
    minWidth: '100%',
    borderRadius: '30px',
    marginTop: '4px',
  }
}));

const DatePickerButton = styled(Button)(({ theme }) => ({
  padding: '12px 24px',
  color: '#666',
  textTransform: 'none',
  justifyContent: 'flex-start',
  borderRadius: '34px',
  flex: '0 0 160px',
  minWidth: '160px',
  whiteSpace: 'nowrap',
  '&:hover': {
    background: '#f5f5f5',
  },
  '& .MuiButton-startIcon': {
    marginRight: '12px',
  },
  '& .MuiButton-startIcon svg': {
    fontSize: 20,
  },
  [theme.breakpoints.down('md')]: {
    flex: '1 1 100%',
    minWidth: '100%',
    padding: '10px 16px',
    marginBottom: '4px',
  }
}));

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [checkIn, setCheckIn] = useState<Dayjs | null>(null);
  const [checkOut, setCheckOut] = useState<Dayjs | null>(null);
  const [guestAnchorEl, setGuestAnchorEl] = useState<null | HTMLElement>(null);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  
  // Date picker popover states
  const [checkInAnchorEl, setCheckInAnchorEl] = useState<HTMLElement | null>(null);
  const [checkOutAnchorEl, setCheckOutAnchorEl] = useState<HTMLElement | null>(null);
  
  const isCheckInOpen = Boolean(checkInAnchorEl);
  const isCheckOutOpen = Boolean(checkOutAnchorEl);

  const handleGuestClick = (event: React.MouseEvent<HTMLElement>) => {
    setGuestAnchorEl(event.currentTarget);
  };

  const handleGuestClose = () => {
    setGuestAnchorEl(null);
  };
  
  const handleCheckInClick = (event: React.MouseEvent<HTMLElement>) => {
    setCheckInAnchorEl(event.currentTarget);
  };
  
  const handleCheckInClose = () => {
    setCheckInAnchorEl(null);
  };
  
  const handleCheckOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setCheckOutAnchorEl(event.currentTarget);
  };
  
  const handleCheckOutClose = () => {
    setCheckOutAnchorEl(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ 
        position: 'relative',
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '24px',
        overflow: 'visible',
        minHeight: { xs: '500px', sm: '550px', md: '600px' },
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 6, sm: 6, md: 8 },
        mx: { xs: 1, sm: 2 },
        mt: 2,
        mb: { xs: 16, sm: 12, md: 6 }
      }}>
        {/* Dark overlay to improve text readability */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '24px',
        }} />
        
        <Box sx={{ 
          maxWidth: { xs: '100%', md: '600px' },
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          <Typography variant="h1" sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            color: 'white',
            mb: 3
          }}>
            Find suitable<br />
            room in H.otel,<br />
            Just search here
          </Typography>
          <Typography sx={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: { xs: '1rem', md: '1.1rem' },
            mb: 4,
            maxWidth: '450px'
          }}>
            The right property for you. big range of top-rated properties.
            Price guarantee.
          </Typography>
        </Box>

        <SearchBar>
          <SearchContainer>
            <DatePickerButton
              startIcon={<CalendarMonth />}
              onClick={handleCheckInClick}
              fullWidth={isMobile}
            >
              {checkIn ? dayjs(checkIn).format('MMM D, YYYY') : 'Check in'}
            </DatePickerButton>
            
            <Popover
              open={isCheckInOpen}
              anchorEl={checkInAnchorEl}
              onClose={handleCheckInClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                  mt: 1
                }
              }}
            >
              <Box sx={{ p: 2 }}>
                <StaticDatePicker
                  displayStaticWrapperAs={isMobile ? "mobile" : "desktop"}
                  value={checkIn}
                  onChange={(newValue) => {
                    setCheckIn(newValue);
                  }}
                  slotProps={{
                    layout: {
                      sx: {
                        '.MuiButtonBase-root': {
                          borderRadius: '8px'
                        }
                      }
                    },
                    actionBar: {
                      actions: [] // Hide default buttons
                    }
                  }}
                />
                <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'flex-end' }}>
                  <Button 
                    onClick={() => {
                      setCheckIn(null);
                      handleCheckInClose();
                    }}
                    sx={{ color: '#666' }}
                  >
                    Clear
                  </Button>
                  <Button
                    onClick={handleCheckInClose}
                    variant="contained"
                    sx={{
                      bgcolor: '#1a1a1a',
                      '&:hover': { bgcolor: '#333' }
                    }}
                  >
                    Apply
                  </Button>
                </Stack>
              </Box>
            </Popover>
            
            {!isMobile && <Box className="divider" />}
            
            <DatePickerButton
              startIcon={<CalendarMonth />}
              onClick={handleCheckOutClick}
              fullWidth={isMobile}
            >
              {checkOut ? dayjs(checkOut).format('MMM D, YYYY') : 'Check out'}
            </DatePickerButton>
            
            <Popover
              open={isCheckOutOpen}
              anchorEl={checkOutAnchorEl}
              onClose={handleCheckOutClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                '& .MuiPaper-root': {
                  borderRadius: 2,
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
                  mt: 1
                }
              }}
            >
              <Box sx={{ p: 2 }}>
                <StaticDatePicker
                  displayStaticWrapperAs={isMobile ? "mobile" : "desktop"}
                  value={checkOut}
                  onChange={(newValue) => {
                    setCheckOut(newValue);
                  }}
                  slotProps={{
                    layout: {
                      sx: {
                        '.MuiButtonBase-root': {
                          borderRadius: '8px'
                        }
                      }
                    },
                    actionBar: {
                      actions: [] // Hide default buttons
                    }
                  }}
                />
                <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: 'flex-end' }}>
                  <Button 
                    onClick={() => {
                      setCheckOut(null);
                      handleCheckOutClose();
                    }}
                    sx={{ color: '#666' }}
                  >
                    Clear
                  </Button>
                  <Button
                    onClick={handleCheckOutClose}
                    variant="contained"
                    sx={{
                      bgcolor: '#1a1a1a',
                      '&:hover': { bgcolor: '#333' }
                    }}
                  >
                    Apply
                  </Button>
                </Stack>
              </Box>
            </Popover>
            
            {!isMobile && <Box className="divider" />}
            
            <SearchItem
              startIcon={<Person />}
              onClick={handleGuestClick}
              fullWidth={isMobile}
            >
              {`${adults} Adults • ${children} Children • ${rooms} Room`}
            </SearchItem>
            <SearchButton
              variant="contained"
              startIcon={<Search />}
              fullWidth={isMobile}
            >
              Search
            </SearchButton>
          </SearchContainer>
        </SearchBar>

        <GuestSelector
          anchorEl={guestAnchorEl}
          onClose={handleGuestClose}
          adults={adults}
          children={children}
          rooms={rooms}
          onAdultsChange={setAdults}
          onChildrenChange={setChildren}
          onRoomsChange={setRooms}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default Hero; 