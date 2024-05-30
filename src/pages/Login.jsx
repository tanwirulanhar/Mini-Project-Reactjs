import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Login = () => {
  return (
    <div>
      <div className="border bg-cyan-900 h-28">
        <Navbar />
      </div>
      <div className="mt-32 w-600 ml-420">
        <h1 className="text-4xl font-bold text-center mb-14">Welcome Back!</h1>
        <form className="flex flex-col mb-32 " action="">
          <input
            className="pl-4 mb-8 border-2 border-black rounded-lg h-9 w-600"
            type="email"
            name="email"
            placeholder="Email"
          />
          <input
            className="pl-4 mb-8 border-2 border-black rounded-lg h-9 w-600"
            type="password"
            name="password"
            placeholder="Password"
          />

          <button className="h-10 font-bold text-center text-white bg-cyan-800 w-600 rounded-2xl">
            Sign In
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
