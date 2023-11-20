import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'

import logo from 'C:\\Users\\Luyanda\\Desktop\\gym_exercises\\src\\assets\\images\\purple logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent="space-around" sx={{ gap: {sm:'122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px= "20px">
      <Link to="/">
        <img src={logo} alt="logo" style={{ width: '60px', height: '60px', margin: ' 0 20px' }} />

      </Link>
      <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link to="/" style={{ textDecoration:'none', color: "#3A1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color:'#3A1212'}}>Exercises</a>
        <a href="#about" style={{textDecoration: 'none', color:'#3A1212'}}>About</a>
        <a href="#admin" style={{textDecoration: 'none', color:'#3A1212'}}>Admin</a>
        <a href="#join" style={{textDecoration: 'none', color:'#3A1212'}}>Join</a>
        <a href="#contact" style={{textDecoration: 'none', color:'#3A1212'}}>Contact</a>
      </Stack>
    </Stack>
  )
}

export default Navbar