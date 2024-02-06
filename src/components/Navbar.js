import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button } from '@mui/material';
import logo from '../assets/images/purple logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        gap: '20px',
        mt: '20px',
        px: '20px',
        backgroundColor: '#3B82F6', // Blue background color
        paddingY: '15px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px', // Rounded corners
      }}
    >
      {/* Stylish logo */}
      <Link to="/">
        <img
          src={logo}
          alt="Your Logo Alt Text"
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            objectFit: 'cover',
          }}
        />
      </Link>

      {/* Navigation links */}
      <Stack
        direction="row"
        gap="30px"
        fontSize={{ xs: '16px', sm: '20px' }}
        alignItems="center"
        justifyContent="center"
        sx={{
          '@media (max-width: 600px)': {
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
      >
        <Button
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#4B5563', // Darker background on hover
            },
          }}
        >
          Home
        </Button>
        <Button
          href="#exercises"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#4B5563',
            },
          }}
        >
          Exercises
        </Button>
        <Button
          href="#about"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#4B5563',
            },
          }}
        >
          About
        </Button>
        <Button
          href="#admin"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#4B5563',
            },
          }}
        >
          Admin
        </Button>
        <Button
          href="#join"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#4B5563',
            },
          }}
        >
          Join
        </Button>
        <Button
          href="#contact"
          sx={{
            textDecoration: 'none',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease-in-out',
            '&:hover': {
              backgroundColor: '#4B5563',
            },
          }}
        >
          Contact
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
