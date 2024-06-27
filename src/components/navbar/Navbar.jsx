import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'




const Navbar = ({setloading}) => {
    const[menu,setMenu] = useState('home')
    
  return (
    <div className="navbar">
      
        <h2>G-Store</h2>
        <ul className="nav-links">
           <Link to='/' onClick={()=>setMenu('home')} className={menu==="home"?"active":""}>Home</Link> 
           <Link to='/about' onClick={()=>setMenu('about')} className={menu==="about"?"active":""}>About</Link> 
           <Link to='order' onClick={()=>setMenu('order')} className={menu==="order"?"active":""}>Order</Link> 
           <Link to='/contact' onClick={()=>setMenu('contact')} className={menu==="contact"?"active":""}>Contact</Link>
            
        </ul>
        <div className="nav-right">
            <div className="search-box">
                <input type="text" placeholder='Enter the product'  />
                <button>Search</button>
            </div>
            <div className="dot"></div>
            <button onClick={()=>setloading(true)} id='sign' >Login</button>
        </div>
    </div>
  )
}

export default Navbar