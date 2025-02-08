import React from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from "./Size"; // Import custom hook for window size

const Login = () => {
  const size = useWindowSize(); // Get window size

  return (
    <div className="row login-container" style={{height:"100vh"}}>
      {/* Left Side (Hidden on small screens) */}
      {size > 1023 && (
        <div className="col-lg-7 black log-bg-img">
          <Link to="/">
            <img 
              src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75" 
              alt="logo" 
              width={150} 
              className='p-3'
              style={{ cursor: "pointer" }} 
            />
          </Link>
        </div>
      )}

      {/* Right Side (Login Form) */}
      <div className={`col-lg-5 black log-right-bg-img ${size < 1023 ? "center-logo" : ""}`}>
        {/* Logo Centered when size < 1023 */}
        {size < 1023 && (
          <div className="text-center">
            <Link to="/">
              <img 
                src="https://rancherscafe.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9137e136.png&w=256&q=75" 
                alt="logo" 
                width={150} 
                className="p-3"
                style={{ cursor: "pointer" }} 
              />
            </Link>
          </div>
        )}

        <p className="fw-bold mx-5 mt-3 fs-2 text-white">Login to <span className='text-orange'>Ranchers</span></p>
        <p className="fw-bold mx-5 fs-2 text-orange">Good Fellas Eat Here!</p>

        <form>
          <label className='text-white fw-bold mx-5 p-2 fs-5'>Enter Email <span style={{ color: "red" }}>*</span></label>
          <input type="email" placeholder='Email' className='mx-5 bg-grey mt-2 p-3 log fw-bold border-yellow form-control w-75 text-white'/>

          <label className='text-white fw-bold mx-5 mt-5 p-2 fs-5'>Enter Password <span style={{ color: "red" }}>*</span></label>
          <input type="password" placeholder='Password' className='mx-5 mt-2 bg-grey p-3 log fw-bold border-yellow form-control w-75 text-white'/>

          <p className='p-3 widthkam fw-bold fs-5'>
            <a href="#" className='text-orange' style={{ textDecoration: "none" }}>Forgot Password?</a>
          </p>

          <button className="mx-5 fw-bold hov-brown btn bg-orange w-75 rounded-5 p-2">SIGN IN</button>

          <p className="text-white fw-bold mt-4 text-center">
            Don't have an account?
            <Link to="/signup" className="text-orange" style={{ textDecoration: "none" }}>
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;


