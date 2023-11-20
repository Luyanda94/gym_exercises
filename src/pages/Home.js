// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
// eslint-disable-next-line no-unused-vars
import searchExercises from '../components/searchExercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <searchExercises />       
      <Exercises />


    </Box>
  )
}

export default Home