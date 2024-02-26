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
  const [bodyPart, setBodyPart] = useState('all');
  const[exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>       
      <Exercises 
      setExercises={setExercises}
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}/>
      <About />
      <Admin /> 
      <Join />
      <Contact />     

    </Box>
  )
}

export default Home