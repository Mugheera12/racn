import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerMyUser, userReset } from "../../features/users/userSlice";
import toast from "react-hot-toast";

const Regform = () => {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Destructure form fields
  const { username, email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  // Get dispatch hook to run the slice's function
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userError, userMessage, userSuccess, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userError) {
      toast.error(userMessage);
    }
    if (userSuccess) {
      toast.success(`Welcome ${user?.username}`);
      navigate("/"); // Redirect to dashboard or home
    }

    dispatch(userReset());
  }, [userError, userSuccess, dispatch, navigate]);

  const handleRegistration = async () => {
    dispatch(registerMyUser({ email, username, password }));
  };

  return (
    <>
      <form>
        <label className="text-white fw-bold mx-5 p-2 fs-5">
          Enter First Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          name="username"
          value={username}
          id="Username"
          type="text"
          placeholder="First Name"
          className="mx-5 bg-grey mt-2 p-3 log fw-bold border-yellow form-control w-75 text-white"
        />

        <label className="text-white fw-bold mx-5 mt-5 p-2 fs-5">
          Enter Email <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          name="email"
          value={email}
          id="Email"
          type="email"
          placeholder="Email"
          className="mx-5 mt-2 bg-grey p-3 log fw-bold border-yellow form-control w-75 text-white"
        />

        <label className="text-white fw-bold mx-5 mt-5 p-2 fs-5">
          Enter Password <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          name="password"
          value={password}
          id="Password"
          type="password"
          placeholder="Password"
          className="mx-5 mt-2 bg-grey p-3 log fw-bold border-yellow form-control w-75 text-white"
        />

        <button
          type="button"
          onClick={handleRegistration}
          className="mx-5 fw-bold hov-brown btn bg-orange w-75 mt-5 rounded-5 p-2"
        >
          Continue
        </button>

        <p className="text-white fw-bold mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange"
            style={{ textDecoration: "none" }}
          >
            Login
          </Link>
        </p>
      </form>
    </>
  );
};

export default Regform;
