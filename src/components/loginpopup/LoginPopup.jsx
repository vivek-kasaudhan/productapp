import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './loginPopup.css'

const LoginPopup = ({setloading}) => {
  const [curr, setcurr] = useState('Login')
  return (
    <div className='login-popup'>
      <form action="" className='login-popup-container' >
         <div className="login-popup-title">
                <h2>{curr}</h2>
                <img onClick={()=>setloading(false)} src={assets.cross_icon} alt="" />
         </div>
         <div className="login-popup-inputs">
          {curr==='Login' ? <></>:<input type="text" placeholder='your Name' required />}

          <input type="text" placeholder='your Email' required />
          <input type="password" placeholder='Password' required />
         </div>
         <button>{curr==='signUp'?'Create Account':'Login' }</button>
         <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing,I Agree to the terms of use & privacy Policy </p>
         </div>
            {curr==='Login'? <p>Create A new account? <span onClick={()=>setcurr('signUp')}>Click here</span></p>: <p>Already have an account?<span onClick={()=>setcurr('Login')}>Login Here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup