

import Home from "./pages/Home";
import HomeLogin from "./pages/HomeLogin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homeLogin" element={<HomeLogin/>} />
        </Routes>
      </BrowserRouter>
      
      {/* <Register/>
      <Login/> */}

    
    </>
  );
}

export default App;
