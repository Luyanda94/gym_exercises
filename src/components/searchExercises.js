import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Box, TextField, Stack, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import { exerciseOptions, fetchData } from '../utils/fecthData';
import HorizontalScrollbar from './HorizontalScrollbar';
import _debounce from 'lodash/debounce';



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

const EXERCISES_API_URL = 'https://exercisedb.p.rapidapi.com/exercises';
const BODY_PARTS_API_URL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList';

const SearchExercises = ({ setExercises, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true);
      try {
        const bodyPartsData = await fetchData(BODY_PARTS_API_URL, exerciseOptions);
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Error fetching body parts data:', error);
        setBodyParts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, []);

  const debouncedSearch = _debounce(async (query) => {
    setLoading(true);
    try {
      const exercisesData = await fetchData(EXERCISES_API_URL, exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.target.toLowerCase().includes(query) ||
          item.equipment.toLowerCase().includes(query) ||
          item.bodyPart.toLowerCase().includes(query)
      );

      setSearch('');
      setExercises(searchedExercises);
    } catch (error) {
      console.error('Error fetching exercises data:', error);
      setError('Error fetching exercises data. Please try again.');
      setExercises([]);
    } finally {
      setLoading(false);
    }
  }, 300);

  const handleSearch = (query) => {
    setSearch(query);
    debouncedSearch(query);
  };

  SearchExercises.propTypes = {
    setExercises: PropTypes.func.isRequired,
    setBodyPart: PropTypes.func.isRequired,
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <AnimatedTextField
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          height="76px"
          value={search}
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <FancySearchButton
          className="search-btn"
          sx={{ bgcolor: '#00acc1', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
          onClick={() => handleSearch(search)}
        >
          Search
        </FancySearchButton>
      </Box>
      
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <HorizontalScrollbar data={bodyParts} />
      </Box>
      
    </Stack>
    
  );
};

export default SearchExercises;