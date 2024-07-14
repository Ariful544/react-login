import React from 'react'

export const LoginSignUp = () => {
  return (
    <div className='container'>
    <div className='card'>
      <div className='card-header'>
        <div className='card-title'>
          Sign Up
        </div>
        <div className='green-line'></div>
      </div>
      <div className='card-body'>
        <form action='' method='post'>
        <div className='input-box'>
          <input type='text' name='name' placeholder='Name here'/>
          <i class='bx bxs-user'></i>
        </div>
        <div className='input-box'>
          <input type='email' name='email' placeholder='Email here'/>
          <i class='bx bxs-envelope'></i>
        </div>
        <div className='input-box'>
          <input type='password' name='password' placeholder='password here'/>
          <i class='bx bxs-lock'></i>
        </div>
        <div className='remember-me'>
          <label><input type='checkbox' name='remember'/> Remember me</label>
          <a href=''> forgot password</a>
        </div>
        <button type='submit' className='btn'>Login</button>
        <div className='register-link'>
          <p>Don't have account? <a href='#'>Register</a></p>
        </div>
        </form>
      </div>
    </div>
  </div>
  )
}
