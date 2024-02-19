import React from 'react';
import { Box, TextField, Stack, Typography, Button } from '@mui/material';
import styled from 'styled-components';

const SearchContainer = styled(Stack)`
  width: 100%;
  max-width: 1170px; /* Adjust as needed */
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const AnimatedTextField = styled(TextField)`
  flex: 1;
  margin-right: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const FancySearchButton = styled(Button)`
  background-color: #ff4081;
  color: #ffffff;
  border-radius: 25px;
  padding: 15px 30px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    background-color: #d81b60;
    transform: scale(1.1);
  }
`;

const SearchExercises = () => {
  return (
    <SearchContainer alignItems="center" justifyContent="center">
      <Box width="100%">
        <Typography
          fontWeight={800}
          sx={{
            fontSize: { lg: '44px', xs: '30px' },
            color: '#1976d2',
          }}
          mb="50px"
          textAlign="center"
        >
          Effective Exercises <br />
          You Should Try
        </Typography>
        <Box display="flex">
          <AnimatedTextField
            sx={{
              fontWeight: '700',
              borderRadius: '40px',
              backgroundColor: '#fff',
              '& .MuiInputBase-input': {
                padding: '15px',
              },
            }}
            height="86px"
            value=""
            onChange={(e) => {}}
            placeholder="Search Exercises..."
            type="text"
          />
          <Button className="search-btn" 
            sx={{
              bgcolor: '#00acc1'
            }}
          variant="contained" 
          >
            Search
          </Button>
        </Box>
      </Box>
    </SearchContainer>
  );
};

export default SearchExercises;
