import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/Loader";
import { Tilt } from "react-tilt";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authenticateUser({ email, password }));
  };

  useEffect(() => {
    if (token) {
      toast.success("Login successful!");
      navigate("/users");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const defaultOptions = {
    reverse: false,
    max: 55,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="sign_up flex justify-center items-center min-h-screen bg-gray-100">
      <div className="signup-main w-full max-w-lg md:max-w-3xl p-8 space-y-4 bg-white shadow-md rounded-lg flex flex-col md:flex-row">
        {/* Left Side with Tilt */}
        <div className="left flex-1 md:mr-10">
          <Tilt
            options={defaultOptions}
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="left-img w-2/3 p-3 md:w-full"
              src="https://res.cloudinary.com/dztkzhtla/image/upload/v1684817261/html%20mailer/bglogin_spn4f2.webp"
              alt="Login Illustration"
            />
          </Tilt>
        </div>
        {/* Right Side Form */}
        <div className="right flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold text-center">
              Login to Your Account
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? <Loader /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
