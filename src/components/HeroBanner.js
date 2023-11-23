import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Box, Stack, Typography } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '70px'},
      ml: { sm: '50px'}
    
    }} position="relative" p="30px">
        <Typography color="#000000" fontWeight="600" fontSize="36px">
        Level Up with<br/>
           Coach Lue
        </Typography>
        <Typography fontWeight={700} 
        sx={{ fontSize: { lg: '10px', xs: '10px'}
        }}
        > 
          Your dedicated fitness Trainer. With my expertise in<br/> 
          exercise and nutrition. I am here to help Your<br/>
          reach your fitness goals. Let us start this journey<br/>
          together.
        </Typography>

    </Box>
  )
}

export default HeroBanner