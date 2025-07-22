import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
  <nav>
 
    <li><NavLink to='./'>Home</NavLink></li>
    <li><NavLink to='./postjob'>Post Job</NavLink></li>
    
    
    </nav> 


    </div>
  )
}

export default Header
