import React, { useState } from 'react'
import './Login.css'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

export const Login = () => {
    
  return (
    <div className='container'>
        <div className='header'>
        <div className='text'>Login</div>
        <br />
        <div className="underline"></div>
    </div>
    <div className="inputs">
        
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email ID' />
        </div> 
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' />
        </div> 
    </div>
    <div className="forgot-password">Lost Password?<span>Click Here!</span></div>
    
    <div className="submit-container">
        
        <div className= "submit">Login</div>
    </div>
    </div>
    
  )
}



