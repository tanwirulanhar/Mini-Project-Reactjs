import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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

  const handleLogin = async (event) => {
    event.preventDefault(); // ini untuk mencegah perilaku default (submit)

    const payload = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post("https://reqres.in/api/login", payload);
      console.log(response);
      setError(null); // Bersihkan error jika login berhasil
 

      setTimeout (() => {
          navigate("/homeLogin");
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
        <h1 className="text-4xl font-bold text-center mb-14">Welcome Back!</h1>
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

          {error && <div className="text-red-500  mb-8" >{error}</div>}
          <button
            onClick={handleLogin}
            className="h-10 font-bold text-center text-white bg-cyan-800 w-600 rounded-2xl"
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
