import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="center">
            <h2>G-store</h2>
            <p>Copyright@techV</p>

        </div>
        <hr/>
        <div className="foot-links">
            <ul className="li">| Home |</ul>
            <ul className="li">About |</ul>
            <ul className="li">Order |</ul>
        </div>
    </div>
  )
}

export default Footer