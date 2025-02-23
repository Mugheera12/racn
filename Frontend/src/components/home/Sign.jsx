import React from 'react';
import { Link } from 'react-router-dom';
import useWindowSize from "./Size"; // Import custom hook for window size
import Regform from './Regform';

const Login = () => {
  const size = useWindowSize(); // Get window size

  return (
    <div className="row login-container">
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

      {/* Right Side (Scrollable) */}
      <div className={`col-lg-5 black log-right-bg-img scrollable-section ${size < 1023 ? "center-logo" : ""}`}>
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

        <Regform/>
      </div>
    </div>
  );
};

export default Login;
