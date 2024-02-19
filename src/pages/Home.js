// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
// eslint-disable-next-line no-unused-vars
import SearchExercises from '../components/SearchExercises';
import About from '../components/About';
import Admin from '../components/Admin';
import Join from '../components/Join';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />       
      <Exercises />
      <About />
      <Admin /> 
      <Join />
      <Contact />     

    </Box>
  )
}

export default Home