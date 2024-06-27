
import'./App.css'

import {Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/navbar/Navbar'
import Order from './pages/Order'
import Footer from './components/footer/Footer'
import LoginPopup from './components/loginpopup/LoginPopup'
import { useState } from 'react'
import Pagenotfound from './pages/Pagenotfound'
import Contact from './pages/Contact'



function App() {
     
  const [loading, setloading] = useState(false)

  return (
    <>
    <Navbar setloading={setloading}/>
    {loading ? <LoginPopup setloading ={setloading}/>:<></>}
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/order" element ={<Order/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    <Footer/>
    
      
    </>
  )
}

export default App
