import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/afro-removebg-preview.png';

// Styled components for animation
const AnimatedContainer = styled(animated.div)`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #ccc; /* Add a border for debugging */
  box-sizing: border-box; /* Ensure padding and border are included in the width */
  justify-content: space-between; /* Adjust the spacing between elements */
`;

const BoxWithDebug = styled(Box)`
  flex: 1;
  border: 1px solid #f00; /* Add a border for debugging */
  box-sizing: border-box; /* Ensure padding and border are included in the height */
`;

const AnimatedTypography = styled(animated(Typography))`
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
`;

const AnimatedButton = styled(animated(Button))`
  background-color: #ff4081;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 8px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #d81b60;
    transform: scale(1.05); /* Increase the scale on hover for a more visible effect */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff4081, #d81b60);
    opacity: 0.5;
    z-index: -1;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 0.8;
  }
`;

const AnimatedImage = styled(animated.img)`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  object-fit: cover; 
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
`;

const HeroBanner = () => {
  const containerSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.molasses,
  });

  const textSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: config.wobbly,
  });

  const buttonSpring = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
    config: config.gentle,
  });

  return (
    <AnimatedContainer style={containerSpring}>
      <BoxWithDebug>
        <AnimatedTypography color="primary" fontWeight="600" fontSize="36px" style={textSpring}>
          Level Up with<br />
          Coach Lue
        </AnimatedTypography>
        
        <AnimatedTypography
          fontWeight={700}
          sx={{ fontSize: { lg: '20px', xs: '10px' } }}
          style={textSpring}
          mb={10}
        >
          Your dedicated fitness Trainer. With my expertise in<br />
          exercise and nutrition. I am here to help You<br />
          reach your fitness goals. Let us start this journey<br />
          together.
        </AnimatedTypography>

        <Box style={{ position: 'relative', width: '100%' }}>
          <AnimatedImage
            src={HeroBannerImage}
            alt="Coach Lue"
            className="hero-banner-img"
            style={{
              ...buttonSpring,
              borderRadius: '10px', 
            }}
          />
        </Box>
            <Typography
            fontWeight= {600}
            color="#ff2625"
            sx={{
              opacity: 0.1,
              display: { lg: 'block', xs: 'none' },
            }}
            fontSize="150px">
              EXERCISE WITH US
            </Typography>
        <AnimatedButton
          href="#admin"
          style={{
            ...buttonSpring,
            backgroundColor: '#00acc1',
          }}
        >
          Admin
        </AnimatedButton>

        <AnimatedButton
          href="#admin"
          style={{
            ...buttonSpring,
            backgroundColor: '#00acc1',
          }}
        >
          Join
        </AnimatedButton>
      </BoxWithDebug>
    </AnimatedContainer>
  );
};

export default HeroBanner;