import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`https://reqres.in/api/register`, payload);
      console.log(response);
      setError(null);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="bg-cyan-900">
        <Navbar />
      </div>
      <div className="max-w-screen-md px-4 mx-auto my-40 md:px-8">
        <h1 className="mb-10 text-4xl font-bold text-center">Join Us!</h1>
        <form className="mb-10" action="">
          <input
            onChange={handleChangeEmail}
            className="w-full pl-4 mb-6 border-2 border-black rounded-lg h-9"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleChangePassword}
            className="w-full pl-4 mb-6 border-2 border-black rounded-lg h-9"
            type="password"
            name="password"
            placeholder="Password"
          />

          {error && <div className="mb-6 text-red-500">{error}</div>}
          <button
            onClick={handleRegister}
            className="w-full h-10 font-bold text-center text-white bg-cyan-800 rounded-2xl"
          >
            Sign Up
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Register;

