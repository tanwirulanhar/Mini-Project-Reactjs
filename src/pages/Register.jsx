import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    console.log(event);
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    console.log(event);
    setPassword(event.target.value);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `https://reqres.in/api/register`,
        payload
      );
      console.log(response);
      setError(null);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="border bg-cyan-900 h-28">
        <Navbar />
      </div>
      <div className="mt-32 w-600 ml-420">
        <h1 className="text-4xl font-bold text-center mb-14">Join Us!</h1>
        <form className="flex flex-col mb-32 " action="">
          <input
            onChange={handleChangeEmail}
            className="pl-4 mb-8 border-2 border-black rounded-lg h-9 w-600"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleChangePassword}
            className="pl-4 mb-8 border-2 border-black rounded-lg h-9 w-600"
            type="password"
            name="password"
            placeholder="Password"
          />

          {error && <div className="mb-8 text-red-500">{error}</div>}
          <button
            onClick={handleRegister}
            className="h-10 font-bold text-center text-white bg-cyan-800 w-600 rounded-2xl"
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
