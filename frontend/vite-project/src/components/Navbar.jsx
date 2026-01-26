
import React from 'react'
import Model from './Model';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const checkLogin=()=>{
    setIsOpen(true)

  }
  return (
  <>
  <header>
    <h2>Food Blogs</h2>
    <ul>
        <li>Home</li>
        <li>MY Recipes</li>
        <li>Favorites</li>
        <li onClick={checkLogin}>Login</li>
       
    </ul>
  </header>
  {isOpen && <Model onClose={()=>{setIsOpen(false)}}/>}
  </>
  )
}

export default Navbar