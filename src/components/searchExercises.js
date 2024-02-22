import React, { useEffect, useState } from 'react';
import { Box, TextField, Stack, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import { exerciseOptions, fetchdata } from '../utils/fecthData';
import HorizontalScrollbar from './AboutHorizontalScrollbar';

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

const fetchExercisesData = async () => {
  try {
    const bodyPartsData = await fetchData(
      'https://exerciseapi3.p.rapidapi.com/exercise/name/push%20up',
      exerciseOptions
    );
    setBodyParts(['all', ...bodyPartsData]);
  } catch (error) {
    console.error('Error fetching body parts data:', error);
    // Handle the error, e.g., show a user-friendly message or retry.
    // For now, you can set an empty array as a fallback value.
    setBodyParts([]);
  }
};

const handleSearch = async () => {
  try {
    const apiUrl = `https://exerciseapi3.p.rapidapi.com/exercise/name/${encodeURIComponent(search)}`;
    const exercisesData = await fetchData(apiUrl, exerciseOptions);

    const searchResults = exercisesData.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
    );

    setSearch('');
    setExercises(searchResults);
  } catch (error) {
    console.error('Error fetching exercises data:', error);
    // Handle the error, e.g., show a user-friendly message or retry.
    // For now, you can set an empty array as a fallback value.
    setExercises([]);
  }
};


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
              borderRadius: '10px',
              backgroundColor: '#fff',
              width: { lg: '1000px', xs: '350' },
              '& .MuiInputBase-input': {
                padding: '15px',
              },
            }}
            height="86px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises..."
            type="text"
          />
          <FancySearchButton
            sx={{
              bgcolor: '#00acc1',
              color: '#fff',
              textTransform: 'none',
              width: { lg: '175px', xs: '80px' }, 
              fontSize: { lg: '20px', xs: '14px' },
              height: '56px',
              right: '0',
            }}
            onClick={handleSearch}
            variant="contained"
          >
            Search
          </FancySearchButton>
        </Box>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
  <HorizontalScrollbar data={bodyParts} />
</Box>
    </SearchContainer>



  );
  

export default SearchExercises;
