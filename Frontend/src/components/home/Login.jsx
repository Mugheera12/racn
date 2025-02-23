import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginMyUser, userReset } from "../../features/users/userSlice"; // Assuming these actions are already defined
import useWindowSize from "./Size"; // Import custom hook for window size
import toast from "react-hot-toast";

const Login = () => {
  const size = useWindowSize(); // Get window size
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  // Destructure form fields
  const { email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  // Redux hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userError, userMessage, userSuccess, user } = useSelector(
    (state) => state.auth
  );

  // Handle login when user clicks "SIGN IN"
  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }
    dispatch(loginMyUser({ email, password }));
  };

  // Handle redirection and toast messages
  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    if (userSuccess) {
      toast.success(`Welcome ${user?.username}`);
      navigate("/"); // Redirect to home/dashboard after login
    }

    // Reset user state after login attempt
    dispatch(userReset());
  }, [userError, userSuccess, dispatch, navigate, userMessage, user]);

  return (
    <div className="row login-container" style={{ height: "100vh" }}>
      {/* Left Side (Hidden on small screens) */}
      {size > 1023 && (
        <div className="col-lg-7 black log-bg-img">
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

      {/* Right Side (Login Form) */}
      <div
        className={`col-lg-5 black log-right-bg-img ${
          size < 1023 ? "center-logo" : ""
        }`}
      >
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

        <p className="fw-bold mx-5 mt-3 fs-2 text-white">
          Login to <span className="text-orange">Ranchers</span>
        </p>
        <p className="fw-bold mx-5 fs-2 text-orange">Good Fellas Eat Here!</p>

        <form>
          <label className="text-white fw-bold mx-5 p-2 fs-5">
            Enter Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="mx-5 bg-grey mt-2 p-3 log fw-bold border-yellow form-control w-75 text-white"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <label className="text-white fw-bold mx-5 mt-5 p-2 fs-5">
            Enter Password <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="password"
            placeholder="Password"
            className="mx-5 mt-2 bg-grey p-3 log fw-bold border-yellow form-control w-75 text-white"
            name="password"
            value={password}
            onChange={handleChange}
          />

          <p className="p-3 widthkam fw-bold fs-5">
            <a
              href="#"
              className="text-orange"
              style={{ textDecoration: "none" }}
            >
              Forgot Password?
            </a>
          </p>

          <button
            type="button"
            onClick={handleLogin}
            className="mx-5 fw-bold hov-brown btn bg-orange w-75 rounded-5 p-2"
          >
            SIGN IN
          </button>

          <p className="text-white fw-bold mt-4 text-center">
            Don't have an account?
            <Link
              to="/signup"
              className="text-orange"
              style={{ textDecoration: "none" }}
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
