import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Login() {
    return (
      <div className='login template d-flex align-items-center vh-100 bg-primary'>
        <div className='d-flex justify-content-center align-items-center w-100'>
          <div className='form-container-left'>
            <div className='form-container p-5 rounded bg-white'>
              <form>
                <h3 className='text-center'>Sign In</h3>
                <div className='mb-2'>
                  <label htmlFor='email'>Email</label>
                  <input type='email' placeholder='Enter Email' className='form-control' />
                </div>
                <div className='mb-2'>
                  <label htmlFor='password'>Password</label>
                  <input type='password' placeholder='Enter Password' className='form-control' />
                </div>
                <div className='mb-2'>
                  <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                  <label htmlFor='check' className='custom-input-label'>
                    Remember me
                  </label>
                </div>
                <div className='d-grid'>
                  <button className='btn btn-primary'>Sign in</button>
                </div>
                <p className='text-end mt-2'>
                  Forgot <a href=''>Password?</a>
                  <Link to='/signup' className='ms-2'>Sign up</Link>
                </p>
              </form>
            </div>
          </div>
          <div className='form-container-right'>
            <div className='form-container p-5 rounded bg-white'>
              <form>
                <h3 className='text-center'>Welcome to Rufus Bank!</h3>
                <h3 className='text-center'>A partner for life!</h3>
                {/* Add content for the second form here */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login