import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault(); // Prevent default behavior (submit)

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("https://reqres.in/api/login", payload);
      console.log(response);
      setError(null); // Clear error if login successful

      const token = response.data.token;
      console.log(token);
      setToken(token);
      localStorage.setItem('acces_token', token)

      setTimeout(() => {
        navigate("/homeLogin");
      }, 2000);
    } catch (error) {
      console.log(error.response);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <div className="bg-cyan-900">
        <Navbar />
      </div>
      <div className="max-w-screen-md px-4 mx-auto my-40">
        <h1 className="mb-10 text-4xl font-bold text-center">Welcome Back!</h1>
        <form className="mb-10">
          <input
            onChange={handleChangeEmail}
            className="w-full h-12 pl-4 mb-6 border-2 border-black rounded-lg"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            onChange={handleChangePassword}
            className="w-full h-12 pl-4 mb-6 border-2 border-black rounded-lg"
            type="password"
            name="password"
            placeholder="Password"
          />

          {error && <div className="mb-6 text-red-500">{error}</div>}
          <button
            onClick={handleLogin}
            className="w-full h-10 font-bold text-center text-white rounded-lg bg-cyan-800"
          >
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;


